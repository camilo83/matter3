import { InstagramEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';
import { SocialMediaPost } from '../../../model/socialMediaPost';
import './eventSocialMedia.scss';
import { Fade } from 'react-awesome-reveal';

type Propstype = {
  posts: SocialMediaPost[];
};

export function EventSocialMedia({ posts }: Propstype) {
  return (
    <div className="event-social-media">
      {posts.map((post, index) => (
        <Fade direction="left" triggerOnce>
          <div className="post" key={index}>
            {post.social_media === 'INSTAGRAM' && (
              <div className="embed-post instagram-post">
                <InstagramEmbed url={post.post_url} />
              </div>
            )}
            {post.social_media === 'YOUTUBE' && (
              <div className="embed-post youtube-post">
                <YouTubeEmbed url={post.post_url} />
              </div>
            )}
          </div>
        </Fade>
      ))}
    </div>
  );
}
