import { css } from "@emotion/react";
import { useRouter } from "next/router";

import CourseLayout from "@/layouts/CourseLayout";

const PracticePage = () => {
    const router = useRouter();
    const { courseId } = router.query;

    return (
        <CourseLayout>
            <div css={container}>
                <h1>{courseId} - Practice</h1>
            </div>
        </CourseLayout>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 80vh;
    width: 100%;
    background-color: #fff;
    border-radius: 1rem;
    padding: 2rem 4rem;

    h1 {
        margin-bottom: 1rem;
    }
`;

export default PracticePage;
