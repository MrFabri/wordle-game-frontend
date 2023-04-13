interface ILetterFeedback {
    letter: string,
    result: string
}

interface IWordFeedback extends Array<ILetterFeedback> { }

interface IFeedback extends Array<IWordFeedback> { }

export type { ILetterFeedback, IWordFeedback }
export default IFeedback;