import React from 'react'

// Local
import { Course } from 'view/course/Course'

const Page = () => <Course />

Page.getInitialProps = async ({ store }) => {
    if (!process.browser) {
        await store.dispatch.course.loadCourse()
    }
}

export default Page
