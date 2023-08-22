module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        odibee: ["Odibee Sans", "cursive"],
        Urbansit: ['Urbansit', 'sans-serif']
      },

      boxShadow: {
        'card': '0px 0px 10px 1px rgba(173, 26, 175, 0.25)',
        'start-btn': '0px 20px 40px #0779FF',
        'hover-start-btn': '0px 10px 40px #0779FF',
        'smooth': 'inset 0px 0px 30px 30px #101A2D',
        'subscribe': '0px 20px 40px 0px #1A31FD80',
        'auth-box': '0px 0px 20px 4px #11111D',
        'chat-box': '-6px 6px 8px -2px #6C6B6Baa',
        'card-upload': '0px 0px 8px 2px #a6a1a3',
        'card-upload-black': '0px 0px 8px 2px #000000'
      },

      backgroundImage: {
        "card": "url('/Card.png')"
      }
    },
    colors: {
      "main-bg": "#000C49",
      "bg-secondary": "#130B22",
      "bg-purple": '#0A0219',
      "main-blue": "#1845F3",
      "card-bg": '#010518'
    },
  },
  plugins: [],
}