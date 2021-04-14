var text = `
# Markdown Test Page
___
    
Every page in this wiki is written in markdown and dynamically converted
to html. This page serves as a reference for all the different ways you can
write text.

<note> You should read this it's probably important!</note>

<warning>Here be dragons.</warning>

<bug>Something is screwed up, whether it's my fault or not i dunno.</bug>

#Headings

# H1
## H2
### H3
#### H4
##### H5

#Horizontal Line
___

## Formatting

**Bold text**

__Bold text__

*Italic text*

_Italic text_

## Tables

No Align

| Header1 | Header2 |
| ------  | ------- |
| text    | text    |
| text    | text    |
| text    | text    |

Right Align

| Header1 | Header2 |
| ------: | ------: |
| text    | text    |
| text    | text    |
| text    | text    |

Center Align

| Header1 | Header2 |
| :-----: | :-----: |
| text    | text    |
| text    | text    |
| text    | text    |

## Images

![Link](./Images/GlitchReading4.png)

<Warning> While you can embed videos like mp4 and webm and gifs like below, it is not
recommended as it bloats the file size of the wiki, Gif is more notorious
compared to mp4 and gif. If absolutely required try to keep the file size below 1 MB. </Warning>

    ![Link](./Images/exampleA.gif)

    <video controls="true" allowfullscreen="true">
        <source src="./Images/exampleB.mp4" type="video/mp4">

## Links

[Link](index.html)

[Link with tooltip](index.html "Title text!")

[Link reference]

[Link reference]: https://google.com

___
`;