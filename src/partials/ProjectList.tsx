import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        直近の <GradientText>プロジェクト</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="ポートフォリオサイト"
        description="このサイトはAstroというフレームワークを使用しています。"
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'ポートフォリオサイト',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      <Project
        name="慶應楽単リスト"
        description="慶應義塾大学の授業情報を収集し、履修の組み方や授業の口コミデータを提供しています。"
        link="https://www.keioeasylist.net/"
        img={{ src: '/assets/images/project-fire.png', alt: '慶應楽単リスト' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.EMERALD}>Prisma</Tags>
            <Tags color={ColorTags.TEAL}>PostgresQL</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      <Project
        name="GETSET"
        description="Coming soon!"
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
