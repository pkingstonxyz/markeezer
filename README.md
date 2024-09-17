# [Markeezer](https://pkingstonxyz.github.io/markeezer)

## What is markeezer?

markeezer is a markov-fied version of weezer's concert setlist planning. Markeezer operates by having a list of every recorded concert setlist weezer has performed, creating a markov transition table based on that, letting the user select a desired setlist length and opening song and generates a setlist. The visual component is creating a concert flyer, of which I've offered 3 variations (explained at the bottom of the webpage).

I'll note that in the dataset, there are songs which only appear as the final song in a setlist. As such, when the system reaches one of these songs it will *not* fulfil the desired setlist constraint. It would be trivial to make it continue via random selection, but I felt it was more faithful to the curatorial work markeezer is based on to halt the concerts where they end naturally.

## Files provided

Please ignore all the clojure files in the root directory. They were created for my experimentation and data scraping phases and as its a lisp I was running things and moving things around in my REPL session as to render them unreadable.

The file markeezer is a node-js project, but it's a clojurescript project.

`markeezer/src/concerts.cljs` - The list of concerts scraped using `../scrape.clj`
`markeezer/src/markov.cljs` - The actual markov machinery behind the system (it's just a recursive function I didn't do anything special). The only unique factor about my implementation is that it requires integer probabilities instead of fractions that add up to a whole.
`markeezer/src/main.cljs` - The file that contains the user interface

## Some notes about the architecture

I'm using react js wrapped by [uix<sup>2</sup>](https://github.com/pitch-io/uix). For state management I'm using [refx](https://github.com/ferdinand-beyer/refx), but it's just a react-wrapper agnostic fork of [re-frame](https://day8.github.io/re-frame/re-frame/). In short, it's react js with functional reactive programming.

## Setup and running

In theory you should be able to do `npm install` and then `npx shadow-cljs watch frontend`, but it's much easier to visit the github pages site [here!](https://pkingstonxyz.github.io/markeezer)

## Assignment questions

 - Describe how the system is personally meaningful to you (at least 1 paragraph).

This system is personally meaningful to me because I am a big fan of the band Weezer. In theory, my particular demographics means that much of american media, especially historically, has been made for me. In spite of this fact, I haven't historically identified with or developed the parasocial relationships people often experience with their favorite celebrities, youtubers, bands, etc. That is until  I started listening to Weezer because of memes surrounding the band. What started with the hits led me to being to dig into their albums, watch videos about their history, poke around wikipedia, and 1 week ago at the time of writing (September 10th) I went to Weezer's concert in Boston. 

Their music with "fun" songs like California Kids and more sad songs like Dead Roses the range of the band. Yes, the lyrics are corny but I ride a unicycle for god's sake so am I. The music feels like it's speaking directly to me and the challenges I go through. As a result I feel, perhaps incorrectly as I only know him through the copious online documentation, a strong kinship with Rivers in a way I don't feel with any other media figure. I love the band and wanted to make a project about them (and probably will make more in this class).

 - Explain how working on it genuinely challenged you as a computer scientist (at least 1 paragraph).
   - How did you push yourself outside of your comfort zone?
   - Why was this an important challenge for you?
   - What are the next steps for you going forward?

From a technical perspective, this project was very straightforward with very little technical challenge. I intended to tackle this assignment by making a piece of art software that uses a liberal definition of "transition" to use markov chains to create interesting brushes that would paint based on a system of selecting the color for an empty pixel based on the color of an adjacnet pixel and probabilities for what the empty pixel should be derived by analyzing another image (it would sort of like a cellular automaton). I can explain in with diagrams exactly what steps I would need to take, what buffers are needed, and even a rough sketch of the shaders that I could use to implement this. Unfortunately I'm a noob. I wasted days learning about webgl2 and shaders, but as this was my first graphics project and I didn't have the skills to do this. As a computer science skill it taught me about project scope and project planning.

On a soft skills computer perspective, accepting this failure and creating this project in an abbreviated timescale was in itself a step outside of my comfort zone. As a challenge I would say this was important because it gave me an idea of what I'll need to be doing in this class and what I'm able to get done in the timescales provided. 

Going forward, I am determined to use a shader in a project somewhere. Perhaps a compute shader as a part of a computationally creative system instead of an entire art program interface written in a fragment shader. Regardless, it will be something more bite-sided and beginner friendly.

For the project, there are a few extensions that could be implemented like generating spotify playlists, tagging at what concert each song transition took place in, or color coding songs based on the albums they're on.

 - Include a discussion of whether you believe your system is creative (and why or why not).

My program outputs concert setlists. I believe that the order of songs in a show is just as much art as an individual song is. I'm having trouble avoiding the conclusion that this system is creative. While it is techinally possible for the system to output a setlist identical to one the band would choose (in which case this particular output is not creative in my opinion), there are some truly novel and avant garde choices being made by markeezer. It's a system that will gladly open with Zep jamb (a maladroit demo) and close with My name is jonas (the opening track of blue). On the longer setlists it has no problem playing Buddy Holly 10+ times in a single set. While this is certainly weird, I can't deny that that's certainly a creative choice for a concert. Sure, the repetition of Buddy Holly 10 times throughout an absurd 71 song set isn't exactly going to reach the same heights as the successive repetitions of Travis Scott's Fein or Jay Z and Kanye West's repetition of the third track of watch the throne (there's a video of this concert it's hilarious), but it's certainly a creative choice.

I wouldn't call a random noise generator creative, but this is not a random noise generator. Each possible transition between songs is a transition that has been approved by a human artist. All the system is doing is recombinating these transitions. At some point in time someone considered *why* we're transitioning between Suzanne and Only in dreams. The system is *not* doing the creative thinking of new transitions, but I think borrowing individual song transitions as discrete pre-rationalized units and composing them into a setlist based on the individually creative elements is creative in and of itself. 

## Credits:

Concert setlists were scraped from [Weezerpedia](https://weezerpedia.com).

All code is of my authorship
