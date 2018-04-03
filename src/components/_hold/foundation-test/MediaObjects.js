import React, { Component } from 'react'
import { MediaObject, MediaObjectSection, Thumbnail } from 'react-foundation'

class MediaObjects extends Component {
  render() {
    return (
      <div id="MediaObjects">
        <h2>Media Objects</h2>

        <h3>Basics</h3>
        <div className="media-object-basics-example">
          <MediaObject>
            <MediaObjectSection>
              <Thumbnail src="//unsplash.it/100" />
            </MediaObjectSection>
            <MediaObjectSection isMain>
              <h4>Dreams feel real while we're in them.</h4>
              <p>
                I'm going to improvise. Listen, there's something you should
                know about me... about inception. An idea is like a virus,
                resilient, highly contagious. The smallest seed of an idea can
                grow. It can grow to define or destroy you.
              </p>
            </MediaObjectSection>
          </MediaObject>
        </div>

        <h3>Section Alignment</h3>
        <div className="media-object-section-alignment-example">
          <MediaObject>
            <MediaObjectSection isMiddle>
              <Thumbnail src="//unsplash.it/100" />
            </MediaObjectSection>
            <MediaObjectSection isMain>
              <h4>Why is it so important to dream?</h4>
              <p>
                So, once we've made the plant, how do we go out? Hope you have
                something more elegant in mind than shooting me in the head? A
                kick. What's a kick? This, Ariadne, would be a kick.
              </p>
              <p>
                What is the most resilient parasite? Bacteria? A virus? An
                intestinal worm? An idea. Resilient... highly contagious. Once
                an idea has taken hold of the brain it's almost impossible to
                eradicate. An idea that is fully formed - fully understood -
                that sticks; right in there somewhere.
              </p>
            </MediaObjectSection>
            <MediaObjectSection isBottom>
              <Thumbnail src="//unsplash.it/100" />
            </MediaObjectSection>
          </MediaObject>
        </div>

        <h3>Stack on Small</h3>
        <div className="media-object-stack-example">
          <MediaObject stackForSmall>
            <MediaObjectSection>
              <Thumbnail src="//unsplash.it/100" />
            </MediaObjectSection>
            <MediaObjectSection>
              <h4>I Can Stack.</h4>
              <p>
                Shrink the browser width to see me stack. I do tricks for dog
                treats, but I'm not a dog.
              </p>
            </MediaObjectSection>
          </MediaObject>
        </div>
      </div>
    )
  }
}

export default MediaObjects
