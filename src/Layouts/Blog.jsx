import React from 'react'
import CommonSvgText from '../Component/CommonSvgText'
import CommonTitle from '../Component/CommonTitle'
import BlogCard from '../Component/BlogCard';


const Blog = () => {

    return (
        <div className={`w-[100%] h-[100vh]`}>
            <CommonSvgText text={`Letest Blogs`} className={`justify-center`} />
            <CommonTitle text={`Blog & Articles`} className={`text-center pt-[20px]`} />

            <div className="flex justify-between mt-[50px]">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

        </div>
    )
}

export default Blog