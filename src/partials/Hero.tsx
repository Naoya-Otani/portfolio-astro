import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          はじめまして、 <GradientText>naotani</GradientText> です 👋
        </>
      }
      description={
        <>
          慶應義塾大学に通いながらソフトウェアエンジニアとして働いているnaotaniと申します。休日はサウナで整ったりラーメン食べたりしています！気軽にコンタクトとりましょー👍
        </>
      }
      avatar={
        <img
          className="pointer-events-none h-80 w-80"
          src="/assets/images/memoji.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://twitter.com/naoya_NaN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/naoya-otani-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
