// // material-ui
// import { Typography } from '@mui/material';

// // project imports
// // import MainCard from 'ui-component/cards/MainCard';
// import CardStyle03 from 'views/application/users/card/CardStyle3';

// // ==============================|| BATCHES PAGE ||============================== //

// const BatchPage = () => <CardStyle03 />;

// export default BatchPage;

// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Batches from 'views/batches-page/batches';

// ==============================|| SAMPLE PAGE ||============================== //

const BatchPage = () => {
    const studentInfo = {
        Id: '123',
        Batches: [
            {
                id: 1,
                name: 'C and CPP Combo Batch',
                role: 'Start Date : 10th March 2022',
                location: 'Shirpur',
                contact: '1234567890',
                email: 'nextechinfosystem@gmail.com',
                about: 'You have enrolled!',
                request: []
            },
            {
                id: 2,
                name: 'UpcomingCoreJavaBatch',
                role: 'Start Date : 23rd March 2022',
                location: 'Shirpur',
                contact: '1234567890',
                email: 'nextechinfosystem@gmail.com',
                about: 'Students can enroll oce you publish it ',
                request: []
            },
            {
                id: 3,
                name: 'C++ Programming Language',
                role: 'Start Date : 10th March 2022',
                location: 'Shirpur',
                contact: '1234567890',
                email: 'nextechinfosystem@gmail.com',
                about: 'Completed',
                request: [{ id: 123 }, { id: 456 }]
            },
            {
                id: 1,
                name: 'Introduction to DBMS',
                role: 'Start Date : 10th April 2022',
                location: 'Shirpur',
                contact: '1234567890',
                email: 'nextechinfosystem@gmail.com',
                about: 'you have enrolled ',
                request: []
            },
            {
                id: 2,
                name: 'Major Project Development',
                role: 'Topic : Breast Cancer Prediction using ML',
                location: 'Shirpur',
                contact: '1234567890',
                email: 'nextechinfosystem@gmail.com',
                about: 'Students can enroll oce you publish it ',
                request: []
            },
            {
                id: 3,
                name: 'Major Project Development',
                role: 'Topic : E-Voting System using Blockchain',
                location: 'Shirpur',
                contact: '1234567890',
                email: 'nextechinfosystem@gmail.com',
                about: 'Completed',
                request: [{ id: 123 }, { id: 456 }]
            }
        ]
    };
    const batches = studentInfo && studentInfo.Batches && studentInfo.Batches.map((batch) => <div>{batch.batch_name}</div>);
    const showBatch = batches && batches.length ? batches : 'Your not currently in any batch Please request to join in.';

    return (
        <MainCard title="Batches">
            <Batches batch={studentInfo.Batches} />
        </MainCard>
    );
};

export default BatchPage;
