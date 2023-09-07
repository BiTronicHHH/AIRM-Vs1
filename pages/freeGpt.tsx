import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import FreeGpt from '@/components/freeGPT/FreeGpt';
import { join } from 'path';
import { readFile } from 'fs/promises';
interface Props {
    markdownContent: string;
}

const freeGpt: React.FC<Props> = ({ markdownContent }) => {
    return (
        <div className='bg-[white] font-body'>
            <Header />
            <div className='w-full flex items-center h-full'>
                <div className='w-[300px] h-full bg-white'></div>
                <FreeGpt markdownContent={markdownContent} />
                <div className='w-[300px] h-full bg-white'></div>
            </div>
            <Footer />
        </div>
    );
};

export default freeGpt;

export async function getStaticProps() {
    const filePath = join(process.cwd(), 'public/home.md');
    const markdownContent = await readFile(filePath, 'utf8');

    return {
        props: {
            markdownContent,
        },
    };
}