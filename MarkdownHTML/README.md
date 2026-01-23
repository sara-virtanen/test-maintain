# Exercise 1 – Markdown & HTML

**Author:** Sara Virtanen
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

- [Markdown (markup)](/MarkdownHTML/PlusGammaAnomalySeason.md?plain=1)
- [Markdown (rendered)](/MarkdownHTML/PlusGammaAnomalySeason.md)
- [HTML (markup)](/MarkdownHTML/PlusGammaAnomalySeason.html)
- [HTML (rendered)](https://sara-virtanen.github.io/PlusGammaAnomalySeason)

## Markdown

I chose to complete this exercise by copying the visual appearance of the [+Gamma Anomaly Season Overview](https://ingress.com/news/2026-plusgamma) by Niantic Spatial, the creator of Ingress, a location-based, global mobile game.

I used the Markdown Guide [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) pages to help me in the task.

I encountered some limitations of Markdown while formatting the text. Markdown does not support resizing images, centering text or images (or I was unable to find the correct method), and only supports tables of a set grid size. These were minor issues that I overcame by using image editing software to resize the image files and using HTML line breaks to format text inside a table.

I had to resort to using HTML with my Markdown in a few places to keep the formatting of the page uniform with its origin:

* I used named anchors for linking to section headings inside the page. Markdown syntax left the anchor names visible, and I did not like how it looked. I'm not sure if I managed to use them correctly or if it was a case of GitHub Markdown flavor not working as expected.
  
  * `<br>## <a name="event-schedule"></a>Event Schedule<br>`
    
* I used line breaks to format text inside the table
  
  * `<br><br>`

## HTML

I used a search engine to seek for Markdown to HTML converters. 

I used the browser-based web application by [CodeShack](https://codeshack.io/markdown-to-html-converter/) to convert my Markdown text to HTML. I pasted my Markdown text into the converter input text box, clicked "Convert to HTML" to start the conversion, and finally downloaded the output HTML in file format.

I uploaded the HTML file both to my *test-maintain* GitHub repo (this one) and my GitHub Pages repo. 

The converted and rendered HTML page can be viewed on my [GitHub Pages](https://sara-virtanen.github.io/PlusGammaAnomalySeason).

The images were also uploaded to GitHub Pages to keep the relative paths functional.
