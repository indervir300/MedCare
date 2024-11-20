"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaMedal, FaStethoscope, FaUserMd } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


interface Doctor {
    name: string;
    specialty: string;
    image: string;
    bio: string;
}

const FeaturedDoctors: React.FC = () => {
    const doctors: Doctor[] = [
        {
            name: 'Dr. Emily Johnson',
            specialty: 'Cardiology',
            image: '/images/female_doctor.jpeg',
            bio: 'Leading expert in heart health with 15 years of experience'
        },
        {
            name: 'Dr. Sarah Williams',
            specialty: 'Pediatrics',
            image: '/images/male_doctor2.jpeg',
            bio: 'Compassionate child healthcare specialist'
        },
        {
            name: 'Dr. Michael Chen',
            specialty: 'Neurology',
            image: '/images/female_doctor5.jpeg',
            bio: 'Specialized in advanced neurological treatments'
        },
        {
            name: 'Dr. Auth',
            specialty: 'Pediatrics',
            image: '/images/male_doctor3.jpeg',
            bio: 'Compassionate child healthcare specialist'
        },
        {
            name: 'Dr. Auth',
            specialty: 'Pediatrics',
            image: '/images/male_doctor3.jpeg',
            bio: 'Compassionate child healthcare specialist'
        },
        {
            name: 'Dr. Auth',
            specialty: 'Pediatrics',
            image: '/images/male_doctor3.jpeg',
            bio: 'Compassionate child healthcare specialist'
        },
        {
            name: 'Dr. Auth',
            specialty: 'Pediatrics',
            image: '/images/male_doctor3.jpeg',
            bio: 'Compassionate child healthcare specialist'
        },
    ];


    return (
        <section className="pt-10 pb-16 bg-blue-50 dark:bg-gray-900 select-none">
            <div className="container mx-auto ">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-16 tracking-tight">
                    Our Leading Specialists
                </h2>





                {/* Desktop Layout */}
                <div className="hidden md:block px-4 pt-2 cursor-grab active:cursor-grabbing">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={doctors.length <= 3 ? 3 : 4}
                        navigation
                        pagination={{ clickable: true }}

                        breakpoints={{
                            640: {
                                slidesPerView: doctors.length <= 3 ? 3 : 4,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: doctors.length <= 3 ? 3 : 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: doctors.length <= 3 ? 3 : 4,
                                spaceBetween: 40,
                            },
                        }}
                        className="doctors-swiper"
                    >
                        {doctors.map((doctor, index) => {

                            const shouldStagger = doctors.length > 2;
                            const staggerClass = shouldStagger
                                ? (() => {
                                    // Simple staggering logic for different doctor counts
                                    if (doctors.length <= 4) {
                                        // For 3-4 doctors, create a basic wave pattern
                                        switch (index) {
                                            case 0: return 'md:mt-0';
                                            case 1: return 'md:mt-10';
                                            case 2: return 'md:-mt-10';
                                            case 3: return 'md:mt-0';
                                            default: return '';
                                        }
                                    } else {
                                        // For more than 4 doctors, create a repeating stagger pattern
                                        const staggerPatterns = [
                                            'md:mt-0',     // Base level
                                            'md:mt-8',     // Slight lift
                                            'md:-mt-8'     // Slight drop
                                        ];

                                        // Create a simple cyclic pattern
                                        return staggerPatterns[index % staggerPatterns.length];
                                    }
                                })()
                                : `${index % 3 === 0 ? 'md:mt-10' : 'md:-mt-10'}`;

                            return (
                                <SwiperSlide key={index} className="py-10">
                                    <div
                                        className={`
                            relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl 
                            overflow-hidden transform transition-all duration-500 w-full 
                            max-w-sm ${staggerClass} hover:shadow-3xl border-l-4 border-blue-600
                            group perspective-1000 mx-auto`}>

                                        {/* Decorative Gradient Overlay */}
                                        <div className="absolute top-0 left-0 right-0 h-1 
                            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Card Content */}
                                        <div className="relative p-6 pb-0">
                                            {/* Professional Badges */}
                                            <div className="absolute top-4 right-4 flex items-center space-x-2">
                                                <div className="bg-green-100 text-green-600 rounded-full w-10 h-10 
                                    flex items-center justify-center shadow-md tooltip
                                "
                                                    data-tooltip="Board Certified">
                                                    <FaMedal className="w-5 h-5" />
                                                </div>
                                            </div>

                                            {/* Doctor Image Container */}
                                            <div className="
                                flex 
                                flex-col 
                                items-center 
                                mb-6
                                relative
                            ">
                                                <div className="
                                    relative 
                                    w-40 
                                    h-40 
                                    rounded-full 
                                    overflow-hidden 
                                    border-4 
                                    border-blue-100 
                                    shadow-lg
                                    group-hover:border-blue-300
                                    transition-all
                                    duration-300
                                ">
                                                    <Image
                                                        src={doctor.image}
                                                        alt={doctor.name}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="
                                            transform 
                                            group-hover:scale-110
                                            transition-transform
                                            duration-300
                                        "
                                                    />
                                                </div>

                                                {/* Specialty Badge */}
                                                <div className="
                                    absolute 
                                    bottom-0 
                                    right-1/2 
                                    translate-x-1/2 
                                    bg-blue-600 
                                    text-white 
                                    rounded-full 
                                    px-3 
                                    py-1 
                                    text-xs 
                                    font-semibold 
                                    shadow-md
                                ">
                                                    <div className="flex items-center">
                                                        <FaStethoscope className="mr-2" />
                                                        {doctor.specialty}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Doctor Details */}
                                            <div className="text-center mb-6">
                                                <h3 className="
                                    text-2xl 
                                    font-bold 
                                    text-gray-800 
                                    dark:text-white
                                    mb-2
                                    group-hover:text-blue-700
                                    transition-colors
                                    duration-300
                                ">
                                                    {doctor.name}
                                                </h3>

                                                {/* Professional Qualifications */}
                                                <div className="
                                    flex 
                                    justify-center 
                                    items-center 
                                    space-x-2 
                                    text-sm 
                                    text-gray-600 
                                    dark:text-gray-300
                                    mb-3
                                ">
                                                    <FaGraduationCap className="w-5 h-5 text-blue-500" />
                                                    <span>MD, FACP</span>
                                                </div>
                                            </div>

                                            {/* Bio */}
                                            <p className="
                                text-gray-600 
                                dark:text-gray-300
                                text-center 
                                mb-6 
                                line-clamp-3
                                text-sm
                                leading-relaxed
                            ">
                                                {doctor.bio}
                                            </p>

                                            {/* Action Buttons */}
                                            <div className="flex space-x-3 mb-5">
                                                <Link
                                                    href={`/doctors/${doctor.name.toLowerCase().replace(' ', '-')}`}
                                                    className="
                                        flex-grow
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        text-center 
                                        px-4 
                                        py-3 
                                        bg-blue-600 
                                        text-white 
                                        rounded-lg 
                                        hover:bg-blue-700 
                                        transition 
                                        duration-300 
                                        ease-in-out
                                        font-semibold
                                        shadow-md
                                        group-hover:shadow-lg
                                    "
                                                >
                                                    <FaUserMd className=" w-5 h-5" />
                                                    View Profile
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>










                {/* Mobile Carousel Design */}
                <div className="block md:hidden px-2">
                    <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.1,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 1.3,
                                spaceBetween: 30
                            }
                        }}
                    >
                        {doctors.map((doctor, index) => (
                            <SwiperSlide key={index} className="py-6">
                                <div className="
                    relative
                    bg-white 
                    dark:bg-gray-800 
                    rounded-2xl 
                    shadow-2xl 
                    overflow-hidden 
                    w-full 
                    max-w-sm 
                    mx-auto
                    border-l-4 
                    border-blue-600
                    group
                    transform
                    transition-transform
                    active:scale-95
                ">
                                    {/* Decorative Gradient Overlay */}
                                    <div className="
                        absolute 
                        top-0 
                        left-0 
                        right-0 
                        h-1 
                        bg-gradient-to-r 
                        from-blue-500 
                        via-purple-500 
                        to-pink-500 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity 
                        duration-300
                    "></div>

                                    {/* Card Content */}
                                    <div className="relative p-6 pb-0">
                                        {/* Professional Badges */}
                                        <div className="
                            absolute 
                            top-4 
                            right-4 
                            flex 
                            items-center 
                            space-x-2
                        ">
                                            <div className="
                                bg-green-100 
                                text-green-600 
                                rounded-full 
                                w-10 
                                h-10 
                                flex 
                                items-center 
                                justify-center 
                                shadow-md
                                tooltip
                            "
                                                data-tooltip="Board Certified">
                                                <FaMedal className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {/* Doctor Image Container */}
                                        <div className="
                            flex 
                            flex-col 
                            items-center 
                            mb-6
                            relative
                        ">
                                            <div className="
                                relative 
                                w-40 
                                h-40 
                                rounded-full 
                                overflow-hidden 
                                border-4 
                                border-blue-100 
                                shadow-lg
                                group-hover:border-blue-300
                                transition-all
                                duration-300
                            ">
                                                <Image
                                                    src={doctor.image}
                                                    alt={doctor.name}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="
                                        transform 
                                        group-hover:scale-110
                                        transition-transform
                                        duration-300
                                    "
                                                />
                                            </div>

                                            {/* Specialty Badge */}
                                            <div className="
                                absolute 
                                bottom-0 
                                right-1/2 
                                translate-x-1/2 
                                bg-blue-600 
                                text-white 
                                rounded-full 
                                px-3 
                                py-1 
                                text-xs 
                                font-semibold 
                                shadow-md
                            ">
                                                <div className="flex items-center">
                                                    <FaStethoscope className="mr-2" />
                                                    {doctor.specialty}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Doctor Details */}
                                        <div className="text-center mb-6">
                                            <h3 className="
                                text-2xl 
                                font-bold 
                                text-gray-800 
                                dark:text-white
                                mb-2
                                group-hover:text-blue-700
                                transition-colors
                                duration-300
                            ">
                                                {doctor.name}
                                            </h3>

                                            {/* Professional Qualifications */}
                                            <div className="
                                flex 
                                justify-center 
                                items-center 
                                space-x-2 
                                text-sm 
                                text-gray-600 
                                dark:text-gray-300
                                mb-3
                            ">
                                                <FaGraduationCap className="w-5 h-5 text-blue-500" />
                                                <span>MD, FACP</span>
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        <p className="
                            text-gray-600 
                            dark:text-gray-300
                            text-center 
                            mb-6 
                            line-clamp-3
                            text-sm
                            leading-relaxed
                        ">
                                            {doctor.bio}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3 mb-5">
                                            <Link
                                                href={`/doctors/${doctor.name.toLowerCase().replace(' ', '-')}`}
                                                className="
                                    flex-grow
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    text-center 
                                    px-4 
                                    py-3 
                                    bg-blue-600 
                                    text-white 
                                    rounded-lg 
                                    hover:bg-blue-700 
                                    transition 
                                    duration-300 
                                    ease-in-out
                                    font-semibold
                                    shadow-md
                                    group-hover:shadow-lg
                                "
                                            >
                                                <FaUserMd className="w-5 h-5" />
                                                View Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default FeaturedDoctors;