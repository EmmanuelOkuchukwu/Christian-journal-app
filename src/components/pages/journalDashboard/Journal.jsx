import React, { useState, useEffect } from 'react';
import { JournalContainer, PrayRequestSection } from './JournalStyles';
import Navbar from '../../layout/Navbar';
import Banner from '../../layout/Banner';
import { AuthService } from '../../../services/authService';
import { PrayerService } from '../../../services/prayerService';
import Card from "../../layout/Card";

const Journal = () => {
    const [prayers, setPrayers] = useState([]);
    useEffect(() => {
        PrayerService.getMyPrayers()
            .then((res) => {
                setPrayers(res);
                console.log(res);
            })
    }, [])
    const currentUser = AuthService.getCurrentUser();
    return (
        <JournalContainer>
            <Navbar currentUser={currentUser} />
            <Banner />
            <PrayRequestSection>
                <div className="main-prayers-content">
                    {prayers?.length > 0 ? prayers?.map(({ _id, title, description, postedBy }) => (
                        <div className="prayer-flex">
                            <Card key={_id} _id={_id} title={title} description={description} postedBy={postedBy} />
                        </div>
                    )): <p>No Prayers Found, Sorry!</p>}
                </div>
            </PrayRequestSection>
        </JournalContainer>
    );
}

export default Journal;
