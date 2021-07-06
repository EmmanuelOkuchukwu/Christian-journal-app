import React, { useState, useEffect } from 'react';
import { JournalContainer, PrayRequestSection } from './JournalStyles';
import Navbar from '../../layout/Navbar';
import Banner from '../../layout/Banner';
import { AuthService } from '../../../services/authService';
import { PrayerService } from '../../../services/prayerService';
import Card from '../../layout/Card';
import { useAlert } from 'react-alert';

const Journal = () => {
    const [prayers, setPrayers] = useState([]);
    const alert = useAlert();
    useEffect(() => {
        PrayerService.getMyPrayers()
            .then((res) => {
                setPrayers(res);
                console.log(res);
            })
    }, [])

    const handleDelete = (id) => {
        PrayerService.onDeletePrayerRequest(id)
            .then((response) => {
                if(!response) {
                    return null
                } else {
                    alert.success('Successfully deleted')
                    const deletePrayer = prayers.filter(prayer => {
                        return prayer._id !== id
                    })
                    setPrayers(deletePrayer);
                }
            })
    }

    const currentUser = AuthService.getCurrentUser();
    return (
        <JournalContainer>
            <Navbar currentUser={currentUser} />
            <Banner />
            <PrayRequestSection>
                <div className="main-prayers-content">
                    {prayers?.length > 0 ? prayers?.map(({ _id, title, description, postedBy }) => (
                        <div className="prayer-flex">
                            <Card key={_id} _id={_id} title={title} description={description} postedBy={postedBy} handleDelete={handleDelete} />
                        </div>
                    )): <p>No prayer entry found, sorry!</p>}
                </div>
            </PrayRequestSection>
        </JournalContainer>
    );
}

export default Journal;
