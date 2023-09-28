import { SubmissionError} from '@formspree/core';
import { FieldValues } from 'react-hook-form';
export interface FormSpreeStatusInterface {
    submitting?: boolean;
    succeeded?: boolean;
    errors: SubmissionError<FieldValues> | null;
}