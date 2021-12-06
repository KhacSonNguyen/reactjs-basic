import "./index.css";
import JobCard from "./JobCard";

function Job() {
    const jobs = [
        {
            title: 'Java Backend Developer to $2k5+1Mo Bonus',
            description: 'CodeLink is an innovative and design-focused development studio made up of an international mix of Designers and Developers. Our main stacks are Golang, Java, Rails, NodeJS, and ReactJS. We have built products in different industries, including Finance, Education, Entertainment, HR, etc for clients ranging from start-ups such as CryptoKitties to big companies such as Air Asia and Electronic Arts.',
        },
        {
            title: 'Frontend Developer (Angular/ReactJS)',
            description: 'The Front End Developer will work along with other developers and report directly to the senior engineer/ Project Manager. Main responsibilities will include deliver new features, follow software development process and contribute ideas to improve the project.',
        },
        {
            title: 'HO - Data Quality Specialist',
            description: '• ACB Health Care.\n' +
                '\n' +
                '• Meal Allowance.\n' +
                '\n' +
                '• Preferential loan as regulated by ACB\n' +
                '\n' +
                '• Yearly Medical Checkup & Team building activities.\n' +
                '\n' +
                '• Professional and Transparent Working Environment',
        },
        {
            title: 'Manual QC Engineer(QA QC, Tester, Agile)',
            description: 'Bachelor’s degree in Computer Science, Computer Engineering, or equivalent industry experience.\n' +
                'Having 2-5 years of experience in testing on multiple platforms especially Mobile (IOS, Android) and API\n' +
                'Experience in Testing UI/UX, Performance (Jmeter), REST APIs,…\n' +
                'Experience in Load Test, Check Log K8S',
        },
        {
            title: '03 Backend Developer - Magento/PHP/JS',
            description: 'We are looking for 03 Software Engineers (PHP Developers) to join our growing team.  We offer great salaries, great people and opportunities for advancement. We are looking for people with passion, willing to work hard and be leaders.',
        }
    ];
    const jobList = jobs.map((item) => {
        return <JobCard content={item} />
    })
    return (
        <div>
            <h1>Jobs</h1>
            {jobList}
        </div>
    );
}

export default Job;