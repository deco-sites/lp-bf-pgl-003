import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    fontFamily: {
      sans: ['Sora', 'sora'],
      serif: ['Quicksand', 'quicksand'],
    },
  },

};
