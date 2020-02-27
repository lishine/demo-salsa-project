// Node - Modules
import React from 'react'

// Common
import { Section } from 'styles/ss-components'
import { usePathStore, usePathActions } from 'common/hooks/hooks'

// Local
import { path } from './MyCourse'

export const Progress = props => {
    const countTasksCompleted = usePathStore(path, 'countTasksCompleted')
    const { numberOfTasks } = usePathStore('common', 'data.program')

    const percent = (100 * countTasksCompleted) / numberOfTasks

    return (
        <>
            <Section
                color="light-normal"
                className="my-course-progress-percent transform-none"
            >
                {percent}%
            </Section>
            <Section ml={[0, 0, 1]}>progress</Section>
        </>
    )
}
