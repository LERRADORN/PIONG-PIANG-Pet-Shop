import axios from "axios";
import { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faqs() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetchAllFaqs();
    }, [])

    const fetchAllFaqs = async () => {
        try {
            const response = await axios.get("http://localhost:8000/faqs");
            setFaqs(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{ width: '80%', margin: '0 auto', marginTop: '30px', marginBottom: '40px'}}>
            <h1 style={{ padding: '20px 10px', color: '#FFFAF0', backgroundColor: '#4E342E', textAlign: 'center' }}>Frequently Asked Questions</h1>
            <Grid container spacing={2}>
                {faqs.map((faq) => (
                    <Grid item xs={12} key={faq.id}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${faq.id}-content`}
                                id={`panel${faq.id}-header`}
                                style={{ fontWeight: 'bold' }}
                            >
                                <Typography variant="h6" style={{ textAlign: 'center' }}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ backgroundColor: '#FFFAF0' }}>
                                <Typography>
                                    Answer: {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Faqs;





