# Personal Portfolio Website

A simple, mobile-responsive website with a left sidebar and YouTube video portfolio.

## Features

- **Left Sidebar Navigation**: Fixed sidebar with logo, social media links, and about section
- **Mobile Responsive**: Adapts beautifully to all screen sizes
- **YouTube Video Integration**: Click thumbnails to play videos in a modal window
- **Modern Design**: Clean, professional styling with smooth animations

## File Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
└── README.md       # This file
```

## How to Use

1. **Replace the logo**: Update the SVG in `index.html` or replace with your own image
2. **Update personal information**:
   - Change "Your Name" in the logo section
   - Update social media links with your actual profiles
   - Modify the "About Me" section with your description
3. **Add your videos**: Replace the YouTube video IDs in the `playVideo()` function calls
4. **Customize colors**: Edit the CSS variables or gradient colors in `styles.css`

## Customization

### Changing Social Media Links
Update the href attributes in the social links section:
```html
<a href="https://github.com/yourusername" target="_blank" class="social-link">
```

### Adding New Videos
Add new video items following this pattern:
```html
<div class="video-item">
    <div class="video-thumbnail" onclick="playVideo('YOUR_VIDEO_ID')">
        <img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg" alt="Video Thumbnail">
        <div class="play-button">▶</div>
        <h3>Video Title</h3>
        <p>Description</p>
    </div>
</div>
```

### Running the Website
To view the website locally:
```bash
cd website
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

## YouTube Video IDs
To find a YouTube video ID:
1. Go to the YouTube video
2. Copy the part after `v=` in the URL
3. Example: For `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`

## Mobile Responsiveness
The website automatically adapts to different screen sizes:
- **Desktop**: Sidebar on the left, content on the right
- **Tablet**: Sidebar stacks above content
- **Mobile**: Single column layout with optimized spacing
