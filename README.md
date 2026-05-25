<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Cormorant+Garamond&size=42&duration=3000&pause=1000&color=C9A84C&center=true&vCenter=true&width=600&lines=Xchange;Premium+Currency+Converter" alt="Xchange" />

<br/>

![Version](https://img.shields.io/badge/version-1.0.0-C9A84C?style=for-the-badge&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-1D9E75?style=for-the-badge)

<br/>

> **A sleek, premium real-time currency converter built with vanilla HTML, CSS & JavaScript.**  
> Featuring live exchange rates, smooth animations, and a dark gold-themed UI.

<br/>

![Xchange Preview](https://via.placeholder.com/800x450/1A1A1A/C9A84C?text=Xchange+Preview)

</div>

---

## ✨ Features

- 🌍 **150+ Currencies** — Supports all major and minor world currencies with country flags
- ⚡ **Live Exchange Rates** — Real-time data powered by Currency API
- 🔄 **Instant Swap** — Swap currencies with a single click and smooth rotation animation
- 💰 **Auto Symbol Update** — Input box symbol updates dynamically based on selected currency
- 🎞️ **Smooth Animations** — Result card reveals with a premium bounce animation on every conversion
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile
- 🕐 **Last Updated Time** — Shows when the rate was last fetched
- 🔁 **Inverse Rate Display** — Shows reverse exchange rate in real time
- 🎨 **Premium Dark UI** — Dark gold theme with subtle grid texture and radial glow effects

---

## 🖥️ Demo

> Open `index.html` directly in your browser — no server needed.

---

## 🚀 Getting Started

### 1 — Clone the repository

```bash
git clone https://github.com/yourusername/xchange.git
cd xchange
```

### 2 — Open in browser

```bash
# Simply open index.html directly
open index.html

# Or use VS Code Live Server extension
```

> ⚠️ **Important:** Open as a direct file (`file://`) not via Live Server (`localhost`) to avoid CORS issues with the Currency API.

---

## 📁 Project Structure

```
xchange/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── index.js            # Core logic and API calls
├── countryList.js      # Currency → Country code mapping
├── currencySymbols.js  # Currency → Symbol mapping
└── README.md           # Project documentation
```

---

## 🔌 API Used

| API | Purpose | Cost |
|-----|---------|------|
| [Currency API by Fawaz Ahmed](https://github.com/fawazahmed0/exchange-api) | Live exchange rates | ✅ Free & Unlimited |
| [Flags API](https://flagsapi.com) | Country flag images | ✅ Free |

### API Endpoints

```javascript
// Today's rate
https://latest.currency-api.pages.dev/v1/currencies/{from}.json

// Yesterday's rate (mirror)
https://yesterday.currency-api.pages.dev/v1/currencies/{from}.json
```

---

## 🎨 Design System

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary Gold | Accent & borders | `#C9A84C` |
| Gold Light | Result text | `#E8D5A0` |
| Gold Dim | Labels | `#7A6230` |
| Background | Deep black | `#0D0D0D` |
| Card Surface | Ink level 2 | `#1A1A1A` |
| Input Surface | Ink level 3 | `#252525` |
| Body Text | Cream white | `#F5F0E8` |
| Teal Accent | Live indicator | `#1D9E75` |
| Red Accent | Negative values | `#C94040` |

### Typography

| Font | Usage |
|------|-------|
| `Cormorant Garamond` | Logo, decorative headings |
| `DM Sans` | UI labels, button text, body |
| `DM Mono` | Numbers, rates, amounts |

---

## ⚙️ How It Works

```
User enters amount & selects currencies
              ↓
Clicks "GET EXCHANGE RATE"
              ↓
Button shows loading spinner + disables
              ↓
Fetches live rate from Currency API
              ↓
Calculates: Amount × Rate = Final Amount
              ↓
Result card animates in with new values
              ↓
Button restores with pulse glow animation
```

---

## 📱 Responsive Breakpoints

| Screen | Behaviour |
|--------|-----------|
| Desktop `> 640px` | Full layout with side-by-side selectors |
| Tablet `480–640px` | Slightly compact layout |
| Mobile `< 480px` | Stacked layout, smaller fonts |

---

## 🛠️ Built With

- **HTML5** — Semantic structure
- **CSS3** — Custom animations, CSS variables, Grid & Flexbox
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Font Awesome 6** — Icons
- **Google Fonts** — Typography

---

## 📌 Known Limitations

- Some rare currencies (e.g. `FKP`, `SRD`) may not be supported by the free API
- Historical data (yesterday's rate for % change) depends on API availability
- Rates are mid-market and for informational purposes only

---

## 🙌 Acknowledgements

- [Fawaz Ahmed](https://github.com/fawazahmed0) — Free Currency Exchange Rates API
- [Flags API](https://flagsapi.com) — Free country flag images
- [Font Awesome](https://fontawesome.com) — Icons
- [Google Fonts](https://fonts.google.com) — Cormorant Garamond, DM Sans, DM Mono

---

## 📄 License

```
MIT License — free to use, modify and distribute.
```

---

<div align="center">

Made with ❤️ by **Jotish**

⭐ Star this repo if you found it helpful!

</div>
