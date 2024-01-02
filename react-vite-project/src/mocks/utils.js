import { dataType } from './data';
import { HttpResponse } from 'msw';

export const appendTypeToData = (data, type) => {
    return Object.values(data).map(item => ({ ...item, type, }));
}

export const mightCauseSurprise = () => {
    const hasError = (Math.random() < 0.1)
    if (hasError) {
        return HttpResponse.json({ error: 'Something went wrong..' }, { status: 500 });
    }
}

export const isValidDataType = (type) => {
    const dataTypes = Object.values(dataType)
    return dataTypes.includes(type)
}
