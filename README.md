# HomiesList - Geometry Dash Challenge List

Welcome to **HomiesList** - A beautiful, modern challenge list for Geometry Dash built with the Shitty Challenge List template!

## 🎨 Features

- **Pastel Purple & Pink Theme** (#9595E2 and #FF8686)
- **Dynamic Challenge Listings** with ranking system
- **User Scoring System** that calculates points based on completion percentages
- **YouTube Video Integration** for verification videos
- **Record Tracking** with record holder leaderboards
- **Responsive Design** with smooth animations
- **Staff Management** section
- **Challenge Requirements** display

## 📋 Getting Started

### Local Setup

1. Clone this repository:
```bash
git clone https://github.com/MakoL5/HomiesList.git
cd HomiesList
```

2. Open `index.html` in your browser - that's it! No build process needed.

### Online Deployment

**GitHub Pages:**
1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` branch
4. Your site will be live at `https://MakoL5.github.io/HomiesList`

**Netlify or Vercel:**
- Connect your GitHub repository
- Both platforms auto-deploy any changes you push

## 📝 Adding Challenges

### Step 1: Edit `js/list.js`

Add your challenges to the `list` array. Use this template:

```javascript
{
  vids: [
    {
      user: "Player Name",
      link: "https://www.youtube.com/watch?v=VIDEO_ID",
      percent: 100,
      hz: "360hz",
    },
  ],
  name: "Challenge Name",
  author: "Creator Name [Verifier Name]",
  more: "Additional creator info if needed",
  desc: "Description of the challenge",
  id: 12345678,
  pass: 123456,
  percentToQualify: 100,
  verificationVid: "YOUTUBE_VIDEO_ID",
  phacked: false,
  hacked: false
}
```

### Step 2: Customize Staff

Edit the staff section in `index.html`:

```html
<a target="_blank" href="https://youtube.com/channel/YOUR_CHANNEL">Your Name</a>
```

### Step 3: Add Links

Update the header buttons with your own links:

```html
<!-- Submit Record Form -->
<a id="FormHelp" target="_blank" href="https://forms.gle/YOUR_FORM_ID" role="button">

<!-- Community Link (Discord, etc) -->
<a id="pc-link" target="_blank" href="https://discord.gg/YOUR_SERVER" role="button">
```

## 🎯 Understanding the Data Structure

| Field | Type | Description |
|-------|------|-------------|
| `vids` | Array | Records/completions with user, link, percentage, and refresh rate |
| `name` | String | Challenge/level name |
| `author` | String | Creator name (use `[Verifier]` format for verified by) |
| `more` | String | Additional info about creators |
| `desc` | String | Challenge description |
| `id` | Number | Geometry Dash Level ID |
| `pass` | Number | Level password |
| `percentToQualify` | Number | Minimum % needed for record placement |
| `verificationVid` | String | YouTube video ID for verification |
| `phacked` | Boolean | Possibly hacked flag |
| `hacked` | Boolean | Confirmed hacked flag |

## 🎨 Customizing Colors

Edit `css/stylesheet-main.css` to change colors:

```css
/* Primary Purple */
#9595E2

/* Secondary Pink */
#FF8686
```

Find and replace these hex codes throughout the file to match your desired palette.

## 📊 User Scoring System

The site automatically:
- Calculates player scores based on challenge rank and completion %
- Tracks verified challenges per creator
- Builds a leaderboard of top players
- Stores player progress data

## 🐛 Troubleshooting

**Videos not showing?**
- Ensure you're using just the YouTube video ID (e.g., `dQw4w9WgXcQ`)
- Don't include the full URL

**Scores not calculating?**
- Check that `percentToQualify` is set correctly
- Ensure `vids` array has valid entries

**Styling looks off?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser

## 📜 Record Requirements

Default requirements are shown in the sidebar. Edit in `index.html`:

```html
<div id="Requirements">
  <h3><u><b>Record Placement Requirements</b></u>:</h3>
  <ul>
    <li>- Your requirement here</li>
  </ul>
</div>
```

## 🚀 Version History

- **v1.0.0** - Initial release with 3 sample challenges

## 💡 Tips

1. **Test locally first** before pushing to GitHub
2. **Back up your `js/list.js`** before major updates
3. **Use a consistent naming scheme** for challenges
4. **Test YouTube links** to ensure they embed correctly
5. **Keep your staff links current**

## 📦 Credits

Template based on the [Shitty Challenge List](https://github.com/ShittyChallengeList/ShittyChallengeList)

Customized by: MakoL5

## 📄 License

Feel free to use this template for your own challenge lists! If you use it, please give credit to the original Shitty Challenge List creators.

---

**Need help?** Check the original template repository or create an issue!

Happy challenging! 🎮✨