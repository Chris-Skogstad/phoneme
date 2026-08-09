import PageHeading from "../components/PageHeading";
import InfoSection from "../components/InfoSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center py-10 px-4 min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <PageHeading
        title="About This Project"
        description="A phoneme-based activity builder for Speech Pathology classrooms."
      />

      <InfoSection title="What is this project?">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </InfoSection>

      <InfoSection title="Assessment 1 scope">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </InfoSection>

      <InfoSection title="The Wordle tool">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
      </InfoSection>

      <InfoSection title="The Word Search tool">
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
      </InfoSection>

      <InfoSection title="How to use this website">
        <div className="aspect-video w-full bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
          Video placeholder — embed link here
        </div>
      </InfoSection>

      <InfoSection title="Author">
        <p className="font-medium text-gray-900 dark:text-white">
          Christopher Skogstad
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Student Number: 21198609
        </p>
      </InfoSection>
    </main>
  );
}