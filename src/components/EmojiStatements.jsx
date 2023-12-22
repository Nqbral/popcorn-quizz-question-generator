import EmojiPicker from 'emoji-picker-react';
import { Theme } from 'emoji-picker-react';
import { useRef } from 'react';

export default function EmojiStatements({ handleSetStatement }) {
    let configPreview = {
        showPreview: false,
    };

    const refInputEmoji = useRef();

    const handleAddingEmoji = (emojiData) => {
        if (refInputEmoji.current.value.length > 0) {
            refInputEmoji.current.value += ' ';
        }
        refInputEmoji.current.value =
            refInputEmoji.current.value + emojiData.emoji;

        handleSetStatement(refInputEmoji.current.value);
    };

    const clearInput = () => {
        refInputEmoji.current.value = '';
    };

    return (
        <>
            <h3 className="py-3">Énoncé de la question</h3>
            <div className="flex flex-row items-center gap-4">
                <input
                    ref={refInputEmoji}
                    type="text"
                    name="input-emoji"
                    id="input-emoji"
                    readOnly={true}
                    className="mb-6 border-b-2 bg-transparent px-1 text-center outline-none transition-colors duration-300 focus:border-yellow-500"
                />
                <button onClick={clearInput}>Effacer</button>
            </div>

            <EmojiPicker
                theme={Theme.DARK}
                searchDisabled={true}
                previewConfig={configPreview}
                onEmojiClick={handleAddingEmoji}
            />
        </>
    );
}
