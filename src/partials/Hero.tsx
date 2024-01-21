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
          はじめまして、 <GradientText>Naoya Otani</GradientText> です 👋
        </>
      }
      description={
        <>
          慶應義塾大学に通いながらソフトウェアエンジニアに従事しているおおたにと申します。休日はサウナで整ったりラーメン食べたりしています！気軽にコンタクトとりましょー👍
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
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
