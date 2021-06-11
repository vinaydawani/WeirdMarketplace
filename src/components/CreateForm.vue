<template>
  <div>
    <form
      id="NFTform"
      enctype="multipart/form-data"
      @submit.prevent="pinToIPFS"
    >
      <div class="flex flex-col gap-y-8">
        <div class="flex flex-col">
          <label for="input-file" class="form-label"
            >Image, Video, or Audio *</label
          >
          <span class="text-xs"
            >File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 10 MB</span
          >
          <div
            class="flex items-center justify-center w-1/3 cursor-pointer mt-2"
          >
            <label
              class="
                flex flex-col
                border-4 border-dashed
                w-full
                h-40
                hover:bg-gray-100
                hover:border-blue-300
                cursor-pointer
                group
              "
            >
              <div
                class="
                  flex flex-col
                  items-center
                  justify-center
                  content-center
                  pt-9
                  cursor-pointer
                "
              >
                <svg
                  class="w-10 h-10 text-gray-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p
                  id="file-name"
                  class="
                    lowercase
                    text-sm text-gray-400
                    group-hover:text-blue-600
                    pt-1
                    tracking-wider
                  "
                >
                  Select a photo
                </p>
              </div>
              <input
                type="file"
                name="input-media-file"
                @change="displayFile"
                class="hidden cursor-pointer"
                accept=".jpg, .png, .gif, .svg, .mp4, .webm, .mp3, .wav, .pdf"
                required
              />
            </label>
          </div>
        </div>
        <div class="flex flex-col">
          <label for="input-title" class="form-label">Title*</label>
          <input
            type="text"
            id="input-title"
            name="input-title"
            v-model="formData.title"
            class="form-input"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="input-external-link" class="form-label"
            >External Link</label
          >
          <input
            type="url"
            id="input-external-link"
            name="input-external-link"
            v-model="formData.url"
            class="form-input"
          />
        </div>
        <div class="flex flex-col">
          <label for="input-description" class="form-label">Description</label>
          <textarea
            id="input-description"
            name="input-description"
            v-model="formData.description"
            class="resize form-input"
          />
        </div>
        <div class="flex flex-col">
          <label for="input-price" class="form-label">Fixed Price*</label>
          <input
            type="number"
            step="0.0000001"
            id="input-price"
            name="input-price"
            v-model="formData.price"
            class="form-input"
            required
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            type="submit"
            id="NFTFormSubmitButton"
            class="w-40 h-12 border-gray-700 border-solid border-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        media: null,
        title: "",
        url: "",
        description: "",
        price: null,
      },
    };
  },
  methods: {
    displayFile(e) {
      const size = e.target.files[0].size;
      const limit = 10;
      if (size / 10 ** 6 < limit) {
        this.formData.media = e.target.files[0];
        document.getElementById("file-name").innerHTML =
          this.formData.media.name;
      } else {
        document.getElementById("file-name").innerHTML =
          "File size greater than 10MB";
      }
    },

    pinToIPFS() {
      // console.log(this.formData);
      // const form = document.getElementById("NFTForm");
      this.pinImage().then((data) => console.log(data.data));
    },

    async pinImage() {
      let inputData = new FormData();
      inputData.append("file", this.formData.media);
      let x = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        inputData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${inputData._boundary}`,
            pinata_api_key: "6ba02cfa7b5a88c13412",
            pinata_secret_api_key:
              "d32fa29c707ecb249b209a0a783ba2bc7bf165eca672a5b6cf4c7443c55ab955",
          },
        }
      );
      return x;
    },
    createMetadata(ipfsHash) {},
  },
};
</script>

<style>
.form-label {
  @apply uppercase md:text-sm text-xs text-gray-500 font-semibold;
}

.form-input {
  @apply py-1 px-3 mt-1 rounded-md border border-gray-600 focus:ring-2 ring-blue-300 focus:outline-none focus:border-transparent;
}
</style>
