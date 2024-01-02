import { setupWorker } from 'msw/browser'
import { http, HttpResponse, delay } from 'msw';
import { allData, dataType } from './data';
import { appendTypeToData, isValidDataType /* mightCauseSurprise */ } from './utils';

export const handlers = [
  http.get('/data/:type', async ({ params }) => {
    await delay();
    if (!isValidDataType(params.type)) {
      return HttpResponse.json({ error: `invalid data type ${params.type} (should be one of: ${Object.values(dataType).join(', ')})` }, { status: 400 });
    }

    // const surprise = mightCauseSurprise()
    // if (surprise) {
    //   return surprise;
    // }

    return HttpResponse.json({ data: appendTypeToData(allData[params.type], params.type) })
  }),

  http.get('/data', async () => {
    await delay();

    // const surprise = mightCauseSurprise()
    // if (surprise) {
    //   return surprise;
    // }

    return HttpResponse.json({ data: allData })
  }),
]

export const worker = setupWorker(...handlers)
