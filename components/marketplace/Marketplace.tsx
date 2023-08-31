import React from 'react'
import MarketComp from './MarketComp';
import { FaFilter, FaSlidersH, FaTimes } from 'react-icons/fa';
interface Props {
  image: string[];
  title: string;
  author: string;
  sells: number;
  likes: number;
  AI: string;
  CPrompt: string;
  Sub: string;
  Tag: string;
  desc: string;
}

const dataTemp = [
  {
    image: [
      '/projects/1.jpg',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
    ],
    title: 'NFT projects that was built using Next.js',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
    ],
    title: 'This is the gift of Felix Martel towards AlbertEng',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
    ],
    title: 'Is there anything wrong?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
    ],
    title: 'All elements are componented!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
      '/projects/3.png',
    ],
    title: 'There is no element that is hard coded!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/1.jpg',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
    ],
    title: 'I am not a spaghtti coder!! Lol!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/1.jpg',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
    ],
    title: 'This is good-looking?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/1.jpg',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
    ],
    title: 'Are you gonna lead this to version 2?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
    ],
    title: 'Is this beautiful?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
    ],
    title: 'Do you know the blockchain?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
    ],
    title: 'This is the most risky part among UI development!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
      '/projects/3.png',
    ],
    title: 'NFT projects that was built using Next.js',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
    ],
    title: 'Is there anything wrong?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
    ],
    title: 'All elements are componented!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
      '/projects/3.png',
    ],
    title: 'There is no element that is hard coded!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/1.jpg',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
    ],
    title: 'I am not a spaghtti coder!! Lol!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/1.jpg',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
    ],
    title: 'This is good-looking?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/1.jpg',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
    ],
    title: 'Are you gonna lead this to version 2?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
    ],
    title: 'Is this beautiful?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
    ],
    title: 'Do you know the blockchain?',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/4.png',
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
    ],
    title: 'This is the most risky part among UI development!',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
  {
    image: [
      '/projects/5.png',
      '/projects/8.png',
      '/projects/2.png',
      '/projects/3.png',
    ],
    title: 'NFT projects that was built using Next.js',
    author: 'Felix Martel',
    sells: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 4,
    AI: 'MidJourney',
    CPrompt: 'Business',
    Sub: 'Fashion design',
    Tag: 'architecture'
  },
];
export default function Marketplace() {
  const [currentRows, setCurrentRows] = React.useState<number>(4);
  const [children, setChildren] = React.useState(dataTemp.map((data, index) => (
    <div className='w-full outline-2 p-1 rounded-lg shadow-card-upload' key={index}>
      <img src={data.image[0]} className='w-full h-full rounded-lg' alt='' onClick={() => handleClick(index, data)} />
    </div>
  )));
  const [screenSize, setScreenSize] = React.useState<number>(0);
  const [filter, setFilter] = React.useState(false);
  const handleResize = () => {
    const newScreenSize = window.innerWidth;
    setScreenSize(newScreenSize);
  };

  React.useEffect(() => {
    handleResize();
    // Only add event listener on the client side
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    console.log(screenSize, 'screenSizeScreenSzie')
    let newRows;
    // Check if the screen size is between 768px and 1024px
    if (screenSize > 1024) {
      newRows = 4;
    }
    else if (screenSize >= 768 && screenSize <= 1024) {
      newRows = 2;
    } else if (screenSize < 768) {
      newRows = 1;
    }
    if (currentRows != newRows) {
      setChildren(children.filter(child => child.key !== 'newDiv'));
    }
    newRows && setCurrentRows(newRows);
    console.log(screenSize, 'dsafadsfds', currentRows)
    return () => {
      // Remove event listener on component unmount
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [screenSize]);

  const handleClick = (index: number, data: Props) => {
    const newScreenSize = window.innerWidth;

    console.log(screenSize, 'screenSizeScreenSzie')
    let newRows;
    // Check if the screen size is between 768px and 1024px
    if (newScreenSize > 1024) {
      newRows = 4;
    }
    else if (newScreenSize >= 768 && newScreenSize <= 1024) {
      newRows = 2;
    } else if (newScreenSize < 768) {
      newRows = 1;
    }
    const newChild = (
      <div key='newDiv' className=' md:col-span-2 lg:col-span-4 flex items-center flex-col'>
        <MarketComp image={data.image} title={data.title} author={data.author} sells={data.sells} likes={data.likes} AI={data.AI} CPrompt={data.CPrompt} Sub={data.Sub} Tag={data.Tag} desc={data.desc} />
      </div>
    );
    const newChildren = [...children];
    console.log(currentRows, '>>>>>>>>>');
    let addId = (Math.floor(index / newRows!) + 1) * newRows!;
    newChildren.splice(addId, 0, newChild);
    console.log(addId, 'ADDID')
    setChildren(newChildren);
  }


  return (
    <div className='flex font-header w-full shadow-card-upload-black py-4 px-4'>
      <div className='fixed left-0 bottom-4 pl-3 pr-4 py-3 cursor-pointer rounded-r-full bg-gradient-to-r from-[#01dcff] to-[#fe01d4] text-white outline-2 outline-double text-xl shadow-hover-start-btn ' onClick={() => setFilter(true)}>
        <FaSlidersH />
      </div>
      <div className={`${ filter ? 'flex' : 'hidden' } flex-col  font-semibold text-white fixed left-0 bottom-0 h-full z-10 overflow-y-auto rounded-r-2xl shadow-card-upload-black bg-gradient-to-b from-[#101a30fa] to-[#042831e5]`}>
        <div className='flex justify-end mr-2 mt-3  rounded-full '>
          <div className='p-2 rounded-full cursor-pointer hover:bg-[#2b5f795e] shrink-0 flex justify-center items-center' onClick={() => setFilter(false)}>
            <FaTimes className='' />
          </div>
        </div>
        <div className='flex items-center py-4 justify-between grow-0 border-b border-b-dark-grey  px-12'>
          <div className='flex items-center mr-20'>
            <FaSlidersH className=' mr-4' />
            <div>Filters</div>
          </div>
          <div>Clear</div>
        </div>
        <div className='pt-8 pb-4 border-b border-b-dark-grey px-12'>
          <div>AI Model:</div>
          <div className='flex flex-col'>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">MidJourney</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Chat GPT</label>
            </div>
          </div>
        </div>
        <div className='py-4  px-12'>
          <div>Category:</div>
          <div className='flex flex-col'>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Business</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">3D World</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Photography</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Painting Effect</label>
            </div>
          </div>
        </div>
        <div className='py-4 px-12'>
          <div>Sub-category:</div>
          <div className='flex flex-col'>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Fashion Design</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Interior Design</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Packaging Design</label>
            </div>
          </div>
        </div>
        <div className='py-4 px-12'>
          <div>Tag:</div>
          <div className='flex flex-col'>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Animal</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Landscape</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 ml-4 text-green-500 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">Architecture</label>
            </div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4' id='imgPlace'>
        {children}
      </div>
    </div>
  )
}
