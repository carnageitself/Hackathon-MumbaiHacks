import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';

const Admission = () => {
  return (
    <div className='mt-20 h-full mx-10 mb-10'>
      <div className="admissionContainer flex items-center justify-center flex-col gap-10">
        <h1 className='text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-transparent'>Admission Process</h1>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Step 1
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
           
          </Typography>
          <div className="h-full flex items-center"><Typography> Student registers and logs in the website.</Typography></div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 2
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
            
          </Typography>
          <Typography>Student fills in his/her profile.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 3
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography>Fill up the application form and uploads all the necessary documents. Then submits his/her application.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 4
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography>The Mumbai University – Admission Team will verify the eligibility which requires a minimum of 24 working days after submission of documents for undergraduates. For Post-graduate admissions will be finalized only after June of the Academic year in which the form is submitted.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 5
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
            
          </Typography>
          <Typography>If the student is eligible, he/she will get an “Eligibility letter” along with the payment information for the registration fee (1150$).
</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 6
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography>The student pays the eligible fee, submits proof of payment to the Admission Team. Upon receipt of payment the student gets the “Provisional Admission Letter”.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 7
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
            
          </Typography>
          <Typography>The Admission Team, upon receipt of the above will require minimum 24 working days to finally process and allot the college.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 8
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
            
          </Typography>
          <Typography> Upon getting an allotted college, the student will receive Mumbai University “Final Admission Letter” which the student will use to apply for his/her visa.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 9
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography>The student will get the full tuition fee cost and payment information. The limit to pay the first (1st) year tuition fee is 7 days post arrival in India.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 10
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
            
          </Typography>
          <Typography>It is the responsibility of the student to report to the college and course allotted to you. Failure to report will entail automatic cancellation of admission. No refund of any of the fees paid to Mumbai University is possible under any circumstances.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 11
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentIncreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
            
          </Typography>
          <Typography> It is mandatory for any student from non English speaking countries to pass English Proficiency Test and his/her responsibility to be present on the day of the examination.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 12
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FormatIndentDecreaseOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           
          </Typography>
          <Typography variant="h6" component="span">
            
          </Typography>
          <div className="h-full flex items-center justify-end">
          <Typography>
            <a href="https://mumoa.digitaluniversity.ac/" style={{color: "blue"}}>Admission Form</a>
          </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    
      </div>
      </div>
  )
}

export default Admission