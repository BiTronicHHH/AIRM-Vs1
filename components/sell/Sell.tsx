import React from 'react'
import { FaBurn, FaChevronDown, FaTimes } from 'react-icons/fa'
import ImageUploadBtn from './ImageUploadBtn'
import SingleUploadBtn from './SingleUploadBtn'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { AlertState } from '@/components/utils/misc';
import Image from 'next/image'
import PlusBtn from './PlusBtn'
import { TagsInput } from "react-tag-input-component";

export default function Sell() {
    const genres = ['Midjourney', 'GPT'];
    const gptTypes = ['GPT-3.5', 'GPT-4'];
    const categories = ['3D', 'Animals', 'Anime', 'Art', 'Avatars', 'Buildings'];
    const sub = ['Cartoons', 'Clothes', 'Fantasy', 'Nature', 'Patterns']
    const fourFeatures = ['Default', 'Advanced Data Analysis', 'Plugins']
    const [alertState, setAlertState] = React.useState<AlertState>({
        open: false,
        message: '',
        severity: undefined,
    })
    const [imageState, setImageState] = React.useState(false);
    const [isNeedAdd, setIsNeedAdd] = React.useState(false);
    const [isPrompt, setIsPrompt] = React.useState(true);
    const [isFour, setIsFour] = React.useState(false);
    const [isPlugin, setPlugin] = React.useState(false);
    const [images, setImages] = React.useState<string[]>(['']);
    const [selected, setSelected] = React.useState(["Prompt", "Awesome"]);
    const handleImageUpload = (files: FileList) => {
        if (files.length <= 5) {
            setImageState(true);
            const imageUrls = Object.values(files).map((file) => URL.createObjectURL(file));
            setImages(imageUrls);
            if (files.length < 5) {
                setIsNeedAdd(true);
            } else {
                setIsNeedAdd(false);
            }
        } else {
            setAlertState({
                open: true,
                message: 'Please Upload Images Up To 5.',
                severity: 'error',
            })
        }
    };
    const handleAdd = (files: FileList) => {
        const imageUrls = Object.values(files).map((file) => URL.createObjectURL(file));
        const updatedUrls = [...images, imageUrls[0]]
        setImages(updatedUrls);
    };
    const handleDelete = (key: number) => {
        const updatedImages = [...images]; // Create a new array with the same elements
        updatedImages.splice(key, 1); // Remove one element at index key
        setImages(updatedImages); // Set the state with the new array
    };
    const handleGenre = (event: { target: { value: any; }; }) => {
        const selectedOption = event.target.value;
        if (selectedOption == "GPT") {
            setIsPrompt(false);
        } else {
            setIsPrompt(true);
        }
    };
    const handleGPTType = (event: { target: { value: any; }; }) => {
        const selectedOption = event.target.value;
        if (selectedOption == "GPT-3.5") {
            setIsFour(false);
        } else {
            setIsFour(true);
        }
    };
    const handlePlugin = (event: { target: { value: any; }; }) => {
        const selectedOption = event.target.value;
        if (selectedOption == "Plugins") {
            setPlugin(true);
        } else {
            setPlugin(false);
        }
    };
    React.useEffect(() => {
        setImages([]);
    }, [isPrompt])
    React.useEffect(() => {
        if (images.length == 0) {
            setImageState(false);
        }
        if (images.length == 5) {
            setIsNeedAdd(false);
        } else if (images.length < 5) {
            setIsNeedAdd(true);
        }
    }, [images])
    return (
        <div className="lg:pt-[144px] flex w-full px-16 md:px-24 lg:px-52 py-20 flex-col items-center shadow-card-upload-black relative text-white header-grad">
            {/* <img className='absolute top-0 left-0 h-full w-full' src='/UnicornGradients/6.jpg' /> */}
            {/* <div className='absolute top-0 left-0 h-full w-full bg-[#00000081] z-[5]'></div> */}
            <div className='font-header text-glow lg:text-6xl md:text-4xl text-center text-3xl px-2 lg:mb-8 md:mb-4 font-bold z-10 tracking-wider '>Sell Your Prompts</div>
            <div className='z-10 mb-10 w-full mt-16'>
                <div className=''>
                    <div className='text-3xl font-semibold flex items-center mb-2'><FaBurn className='mr-2 text-cus-pink text-2xl' />Cover Section</div>
                    <div className='italic font-semibold px-4'>(The information provided here will be visible to the public. Please avoid including the prompts within this section )</div>
                </div>
                <div className='my-8 px-4'>
                    <div className='text-xl font-semibold mb-3'><span className='text-red-500'>* </span>Choose your AI model</div>
                    <div className='relative mr-2 px-5'>
                        <select className="pl-2 pr-8 py-1 text-white font-semibold bg-[transparent] border border-white rounded-md shadow-sm outline-none appearance-none  mr-2 outline focus:border-white focus:ring-0 focus:outline focus:outline-white outline-white  cursor-pointer" onChange={handleGenre}>
                            {genres.map((genre, i) => (
                                <option key={i} selected={genre.includes("Mid")} className='bg-[transparent] text-black'>{genre}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {
                    (!isPrompt) && (
                        <div className='my-8 px-4'>
                            <div className='text-xl font-semibold mb-2'>Choose your Chat GPT Engine</div>
                            <div className='relative mr-2'>
                                <select className="pl-2 pr-8 py-1 text-white font-semibold bg-[transparent] border border-white rounded-md shadow-sm outline-none appearance-none  mr-2 outline focus:border-white focus:ring-0 focus:outline focus:outline-white outline-white  cursor-pointer" onChange={handleGPTType}>
                                    {gptTypes.map((gpt, i) => (
                                        <option key={i} selected={gpt.includes("3.5")} className='bg-[transparent] text-black'>{gpt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )
                }
                {
                    (!isPrompt) && (isFour) && (
                        <div className='my-8 px-4'>
                            <div className='text-xl font-semibold mb-2'>GPT -  4 Features</div>
                            <div className='relative mr-2'>
                                <select className="pl-2 pr-8 py-1 text-white font-semibold bg-[transparent] border border-white rounded-md shadow-sm outline-none appearance-none  mr-2 outline focus:border-white focus:ring-0 focus:outline focus:outline-white outline-white  cursor-pointer" onChange={handlePlugin}>
                                    {fourFeatures.map((feature, i) => (
                                        <option key={i} selected={feature.includes("Default")} className='bg-[transparent] text-black'>{feature}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )
                }
                {
                    (!isPrompt) && (isFour) && (isPlugin) && (
                        <div className='my-8 px-4 flex items-center'>
                            <div className='text-xl font-semibold mr-2'>Plugins:</div>
                            <input className="bg-transparent border border-white py-1 pl-4 pr-8 focus:outline-none focus:rounded-md focus:ring-1 ring-white focus:border-none font-light text-white w-[150px] " />
                        </div>
                    )
                }
                <div className='my-8 px-4'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Title (As short as possible)</div>
                    <input className="bg-transparent border border-white py-2 pl-4 pr-8 focus:outline-none focus:rounded-md focus:ring-1 ring-white focus:border-none font-light text-white w-[60%] " />
                </div>
                <div className='my-8 px-4 flex flex-col'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Description</div>
                    <textarea
                        name="message"
                        className=" resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                {
                    (!isPrompt) && (
                        <>
                            <div className='my-8 px-4 flex flex-col'>
                                <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Input</div>
                                <textarea
                                    className=" resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                                ></textarea>
                            </div>
                            <div className='my-8 px-4 flex flex-col'>
                                <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Output</div>
                                <textarea
                                    className=" resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                                ></textarea>
                            </div>
                        </>
                    )
                }
                {
                    (isPrompt) ? (
                        <div className='my-8 px-4 flex flex-col'>
                            <div className='text-xl font-semibold mb-2 cursor-pointer' onClick={() => setImageState(false)}><span className='text-red-500 mb-3'>* </span>Upload the Output photos of the prompt (Up to 5)</div>
                            {(!imageState) && (<ImageUploadBtn onImageUpload={handleImageUpload} />)}
                            {imageState && (
                                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 py-6 px-4 rounded-2xl shadow-card-upload-black'>
                                    {images.map((img, index) => (
                                        <div className='w-full aspect-square outline-2 p-1 rounded-lg shadow-card-upload relative' key={index}>
                                            <Image src={img} className='p-1 w-full h-full rounded-lg object-cover object-center' alt='ddd' fill={true} />
                                            <div className='p-2 absolute top-2 right-2 bg-[#090e293a] rounded-full text-[#d3dcff70] hover:text-white cursor-pointer' onClick={() => handleDelete(index)}>
                                                <FaTimes className='text-xl' />
                                            </div>
                                        </div>
                                    ))}
                                    {isNeedAdd && (<PlusBtn onImageUpload={handleAdd} />)}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='my-8 px-4 flex flex-col'>
                            <div className='text-xl font-semibold mb-2 cursor-pointer' onClick={() => setImageState(false)}><span className='text-red-500 mb-3'>* </span>Upload One Cover Photo of the Prompt</div>
                            {(!imageState) && (<SingleUploadBtn onImageUpload={handleImageUpload} />)}
                            {imageState && (
                                <div className='p-2 w-[250px] flex flex-col md:items-start items-center  rounded-2xl shadow-card-upload-black'>
                                    {images.map((img, index) => (
                                        <div className='w-full aspect-square outline-2 p-1 rounded-lg shadow-card-upload relative cursor-pointer' key={index}>
                                            <Image src={img} className='w-full p-1 h-full rounded-lg object-cover object-center' alt='ddd' fill={true} />
                                            <div className='p-2 absolute top-2 right-2 bg-[#090e293a] rounded-full text-[#d3dcff70] hover:text-white cursor-pointer' onClick={() => handleDelete(index)}>
                                                <FaTimes className='text-xl' />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
            <div className='z-10 w-full'>
                <div className=''>
                    <div className='text-3xl font-semibold mb-1 flex items-center'><FaBurn className='mr-2 text-cus-pink text-2xl' />Prompt Section</div>
                    <div className='italic font-semibold px-4 mb-2'>(The information shared here will become visible only after users successfully purchase / review prompts.)</div>
                </div>
                <div className='my-8 px-4'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Prompt Formula</div>
                    {isPrompt ? (
                        <ol className='mb-3'>
                            <li>1. Ensure that all the Midjourney settings and parameters are added at the end of the prompt such as Version, Niji mode, Stylize in such --v 5.2 --niji 5 --s 500</li>
                            <li>2. Put any variables in [square brackets] such as [Animal] for (dog, cat, dolphin, elephant, etc.)</li>
                        </ol>
                    ) : (
                        <div className='mb-3'>Put any variables in [square brackets] such as [Animal] for (dog, cat, dolphin, elephant, etc.)</div>
                    )
                    }
                    <textarea
                        className=" w-full resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                <div className='my-8 px-4'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Example of Prompt</div>
                    {(!isPrompt) && (<div className=''>Provide a complete example of the prompt with [variable] filled in.</div>)}
                    <textarea
                        className=" w-full resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                <div className='my-8 px-4'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>How to Use</div>
                    <textarea
                        className=" w-full resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                {(!isPrompt) && (
                    <div className='my-8 px-4'>
                        <div className='text-xl font-semibold mb-1'><span className='text-red-500'>* </span>Chat GPT share chat link</div>
                        <div className='italic font-semibold px-4 mb-2'>Please refrain from deleting the &quot;Chat&quot; in your Chat GPT model before verification.</div>
                        <input className="bg-transparent border border-white py-2 pl-4 pr-8 focus:outline-none focus:rounded-md focus:ring-1 ring-white focus:border-none font-light text-white w-full " placeholder='https://chat.openai.com/share/00000000-0000-0000-0000-0000000000' />
                    </div>
                )}
            </div>
            <div className='z-10 mb-10 w-full'>
                <div className=''>
                    <div className='text-3xl font-semibold flex items-center mb-2'><FaBurn className='mr-2 text-cus-pink text-2xl' />Label</div>
                </div>
                <div className='flex items-center'>
                    <div className='my-8 px-4'>
                        <div className='text-xl font-semibold mb-3'><span className='text-red-500'>* </span>Choose your Category</div>
                        <div className='relative mr-2 px-5'>
                            <select className="pl-2 pr-8 py-1 text-white font-semibold bg-[transparent] border border-white rounded-md shadow-sm outline-none appearance-none  mr-2 outline focus:border-white focus:ring-0 focus:outline focus:outline-white outline-white  cursor-pointer">
                                {categories.map((cat, i) => (
                                    <option key={i} selected={cat.includes("Mid")} className='bg-[transparent] text-black'>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='my-8 px-4'>
                        <div className='text-xl font-semibold mb-3'><span className='text-red-500'>* </span>Choose your Subcategory</div>
                        <div className='relative mr-2 px-5'>
                            <select className="pl-2 pr-8 py-1 text-white font-semibold bg-[transparent] border border-white rounded-md shadow-sm outline-none appearance-none  mr-2 outline focus:border-white focus:ring-0 focus:outline focus:outline-white outline-white  cursor-pointer">
                                {sub.map((item, i) => (
                                    <option key={i} selected={item.includes("Mid")} className='bg-[transparent] text-black'>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='my-8 px-4 w-full'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Input Tags</div>
                    <TagsInput
                        value={selected}
                        onChange={setSelected}
                        name="tags"
                        placeHolder="tags"
                    />
                </div>
                <div className='my-12 px-4 flex w-full justify-center items-center'>
                    <div className='py-2 px-8 rounded-xl  hover:shadow-card-upload text-2xl shadow-card-upload-black cursor-pointer hover:bg-[#aaaaaa22]'>Submit for Approval</div>
                </div>
            </div>
            <Snackbar
                open={alertState.open}
                autoHideDuration={6000}
                onClose={() => setAlertState({ ...alertState, open: false })}
            >
                <Alert
                    onClose={() => setAlertState({ ...alertState, open: false })}
                    severity={alertState.severity}
                    className='text-[red]'
                >
                    {alertState.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
