import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const NullSoundFontPlayerNoteAudio = {
    stop() {}
};

const NullSoundFontPlayer = {
    play() {
        return NullSoundFontPlayerNoteAudio;
    }
};

const AudioPlayer = () => {
    const audioContext = new AudioContext();

    let soundFPlayer = NullSoundFontPlayer;

    return {
        setInstrument(instrumentName) {
            SoundFontPlayer.instrument(audioContext, instrumentName)
                .then(soundFontPlayer => {
                    soundFPlayer = soundFontPlayer;
                })
                .catch(e => {
                    soundFPlayer = NullSoundFontPlayer;
                });
        },
        playNote(note) {
            return soundFPlayer.play(note);
        }
    };
};

export default AudioPlayer;