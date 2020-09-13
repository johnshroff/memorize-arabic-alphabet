import React, {useState} from 'react';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {ProgressSpinner} from 'primereact/progressspinner';
import {Dialog} from 'primereact/dialog';

export function LetterCard(props) {

	const {letter, onNextClick} = props;
	const [showLetter, setShowLetter] = useState(false);
	const [loading, setLoading] = useState(false);

	async function playSound() {
		setLoading(true);
		try {
			const audio = new Audio(`../assets/sounds/${letter}.mp3`);
			await audio.play();
		} finally {
			setLoading(false);
		}
	}

	function toggleLetter() {
		setShowLetter(!showLetter);
	}

	const footer = (
		<span>
			<Button style={{marginRight: 10}} iconPos={"right"} label={'Letter'} icon="pi pi-search" className="p-button-rounded p-button-info" onClick={toggleLetter} />
			<Button style={{marginRight: 10}} iconPos={"right"} label={'Pronunciation'} icon="pi pi-play" className="p-button-rounded p-button-success" onClick={playSound} />
			<Button iconPos="right" label={'Next'} icon="pi pi-angle-right" className="p-button-rounded p-button-info" onClick={onNextClick} />
		</span>
	);

	return (
		<Card footer={footer}>
			<h2 style={showLetter ? {} : {visibility: 'hidden'}}>{letter.toUpperCase()}</h2>
			<img src={`../assets/images/${letter}.png`} alt={`card-${letter}-image`}/>
			<Dialog visible={loading} modal onHide={() => {}} showHeader={false}>
				<ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8"/>
			</Dialog>
		</Card>
	);
};