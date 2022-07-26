import React, { useState } from 'react'
import Acamedic from '../Input/Acamedic'
import Extra from '../Input/Extra'
import Personal from '../Input/Personal'
import Profile from '../Input/Profile'
import Strength from '../Input/Strength'
import Work from '../Input/Work'
import { Timeline, Event } from 'react-trivial-timeline';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';



function Home() {
    const printRef = React.useRef();
    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Resume.pdf');
    };

    const [inputVisible, setInputVisible] = useState('flex');
    const [outputVisible, setOutputVisible] = useState('hidden')

    const OutVisible = () => {
        setInputVisible('hidden');
        setOutputVisible('flex');
    }

    const InVisible = () => {
        setInputVisible('flex');
        setOutputVisible('hidden');
    }
    const [profile, setProfile] = useState(
        {
            FullName: '',
            Address: '',
            EmailAddress: '',
            MobileNumber: '',
            Place: ''
        }
    )
    const [personal, setPersonal] = useState(
        {
            FatherName: '',
            DOB: '',
            Gender: '',
            Religion: '',
            Nationality: '',
            Language: '',
            Marriage: ''
        }
    )

    const [academicList, setAcademicList] = useState([{ academic: "" }, { academic: "" }, { academic: "" }]);

    const [extraList, setExtraList] = useState([{ extra: "" }, { extra: "" }, { extra: "" }]);

    const [workList, setWorkList] = useState([{ work: "" }, { work: "" }, { work: "" }]);

    const [strengthList, setStrengthList] = useState([{ strength: "" }, { strength: "" }, { strength: "" }]);

    return (
        <div className='w-full flex-wrap flex flex-col justify-center items-center bg-slate-100'>
            <div className={`w-full ${inputVisible} flex-wrap flex-col justify-center items-center bg-slate-100 `}>
                <h1 className='mt-5 w-full font-bold text-2xl text-center'>Online Resume Maker</h1>
                <Profile profile={profile} setProfile={setProfile} />
                <div className='flex md:flex-row flex-col w-full flex-wrap'>
                    <Acamedic academicList={academicList} setAcademicList={setAcademicList} />
                    <Extra extraList={extraList} setExtraList={setExtraList} />
                </div>
                <div className='flex md:flex-row flex-col w-full flex-wrap'>
                    <Work workList={workList} setWorkList={setWorkList} />
                    <Strength strengthList={strengthList} setStrengthList={setStrengthList} />
                </div>
                <Personal personal={personal} setPersonal={setPersonal} />
                <div className='my-10 w-11/12 flex justify-end items-end'>
                    <button className='py-2 px-10 rounded bg-gray-800 hover:text-black hover:bg-slate-200 font-semibold text-white' onClick={OutVisible}>PREVIEW</button>
                </div>

            </div>

            <div className={`${outputVisible} flex-col w-full`}>
                <div className='w-11/12 my-6 flex justify-end items-end'>
                    <button className='py-2 px-10 rounded bg-gray-800 hover:text-black hover:bg-slate-200 font-semibold text-white' onClick={InVisible}>EDIT</button>
                    <button className='ml-2 py-2 px-10 rounded bg-gray-800 hover:text-black hover:bg-slate-200 font-semibold text-white' onClick={handleDownloadPdf}>DOWNLOAD PDF</button>
                </div>
                <div ref={printRef}>
                    <h1 className='w-full text-center text-4xl mb-20 font-bold'>RESUME</h1>
                    <div className='w-full md:px-10 flex-wrap p-6 flex flex-row md:flex-row justify-start items-start bg-slate-100'>
                        <div className='w-full flex flex-col md:w-1/3 justify-start items-start'>
                            <h1 className='font-bold text-xl'>{profile.FullName}</h1>
                            <span className='mt-8 text-base'><span className='font-medium'>Address: </span>{profile.Address}</span>
                            <span className='text-base'><span className='font-medium'>Email Address: </span>{profile.EmailAddress}</span>
                            <span className='text-base'><span className='font-medium'>Mobile Number: </span>{profile.MobileNumber}</span>
                        </div>
                        <div className='w-full md:pl-6 md:w-2/3 flex flex-col justify-start items-start'>
                            <div className='flex flex-col w-full'>
                                <div className='w-full font-medium'>
                                    <Timeline lineColor='black' className='w-full'>
                                        <Event className='w-full' interval='ACADEMIC QUALIFICATION' title={''}>
                                            <div className='flex flex-col font-normal'>
                                                <ul className='list-disc'>
                                                    {academicList &&
                                                        academicList.map((singleService, index) => {
                                                            return (

                                                                <li key={index}>{singleService.academic}</li>
                                                            )
                                                        })}
                                                </ul>
                                            </div>
                                        </Event>
                                    </Timeline>
                                </div>
                            </div>
                            <div className='flex w-full flex-col mt-6'>
                                <div className='w-full font-medium'>
                                    <Timeline lineColor='black' className='w-full'>
                                        <Event className='w-full' interval='EXTRA QUALIFICATION' title={''}>
                                            <div className='flex flex-col font-normal'>
                                                <ul className='list-disc'>
                                                    {extraList &&
                                                        extraList.map((singleService, index) => {
                                                            return (

                                                                <li key={index}>{singleService.extra}</li>
                                                            )
                                                        })}
                                                </ul>
                                            </div>
                                        </Event>
                                    </Timeline>
                                </div>
                            </div>
                            <div className='flex flex-col w-full mt-6'>
                                <div className='w-full font-medium'>
                                    <Timeline lineColor='black' className='w-full'>
                                        <Event className='w-full' interval='WORK EXPERIENCE' title={''}>
                                            <div className='flex flex-col font-normal'>
                                                <ul className='list-disc'>
                                                    {workList &&
                                                        workList.map((singleService, index) => {
                                                            return (

                                                                <li key={index}>{singleService.work}</li>
                                                            )
                                                        })}
                                                </ul>
                                            </div>
                                        </Event>
                                    </Timeline>
                                </div>
                            </div>
                            <div className='flex flex-col w-full mt-6'>
                                <div className='w-full font-medium'>
                                    <Timeline lineColor='black' className='w-full'>
                                        <Event className='w-full' interval='STRENGTH' title={''}>
                                            <div className='flex flex-col font-normal'>
                                                <ul className='list-disc'>
                                                    {strengthList &&
                                                        strengthList.map((singleService, index) => {
                                                            return (

                                                                <li key={index}>{singleService.strength}</li>
                                                            )
                                                        })}
                                                </ul>
                                            </div>
                                        </Event>
                                    </Timeline>
                                </div>
                            </div>
                            <div className='flex flex-col w-full mt-6'>
                                <div className='w-full font-medium'>
                                    <Timeline lineColor='black' className='w-full'>
                                        <Event className='w-full' interval='PERSONAL DETAILS' title={''}>
                                            <div className='flex flex-col font-normal'>
                                                <ul className='list-disc'>
                                                    <li><span className='font-medium mr-3'>Father's Name:    </span>{personal.FatherName}</li>
                                                    <li><span className='font-medium mr-3'>Date of Birth:    </span>{personal.DOB}</li>
                                                    <li><span className='font-medium mr-3'>Gender:    </span>{personal.Gender}</li>
                                                    <li><span className='font-medium mr-3'>Religion:    </span>{personal.Religion}</li>
                                                    <li><span className='font-medium mr-3'>Nationality:    </span>{personal.Nationality}</li>
                                                    <li><span className='font-medium mr-3'>Language Known:    </span>{personal.Language}</li>
                                                    <li><span className='font-medium mr-3'>Marital Status:    </span>{personal.Marriage}</li>
                                                </ul>
                                            </div>
                                        </Event>
                                    </Timeline>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='mt-10 w-full flex flex-col justify-center items-center'>
                        <span className='text-base w-11/12'><span className='font-medium'>Declaration: </span>I hereby declare that all the above information provided by me is true to the best of my knowledge.</span>
                        <span className='text-base my-10 mt-5 w-11/12'>Date: ..........</span>
                    </div>
                    <div className='w-full flex flex-col justify-between items-center'>
                        <div className='w-11/12 mb-20 flex justify-between items-center flex-row'>
                            <div className='text-base'>Place: <span className='ml-2'>{profile.Place}</span></div>
                            <div className='text-base mr-5 font-semibold'>{profile.FullName}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home