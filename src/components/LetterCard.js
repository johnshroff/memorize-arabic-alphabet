import React, {useState} from 'react';
import {Card} from "primereact/card";
import {Button} from "primereact/button";

export function LetterCard(props) {

	const {letter, onNextClick} = props;
	const [showLetter, setShowLetter] = useState(false);

	function playSound() {
		const audio = new Audio(`../assets/sounds/${letter}.mp3`);
		audio.play();
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
		</Card>
	);
};