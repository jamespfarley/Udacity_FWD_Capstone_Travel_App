import { mergeObjects } from "./weather";


export const getDestinationImage = async (data) => {

                                        // !!!
                                        console.log('... pixabay.js : getDestinationImage() :: data.geonames[0].name = ' + JSON.stringify(data.geonames[0].name));

                                        const pixabayURL = 'http://localhost:8081/pixabay';

                                        const response = await fetch(pixabayURL).catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                        try{

                                            const imgData = {};
                                            const retData = await response.json();

                                            // !!!
                                            console.log('...  pixabay.js : getDestinationImage() :: data = ' + JSON.stringify(data));


                                            imgData['imgUrl'] = retData.hits[0].previewURL;
                                            // !!!
                                            console.log('...  pixabay.js : getDestinationImage() :: imgData = ' + JSON.stringify(imgData));

                                            return mergeObjects(data, imgData);

                                        } catch(error){
                                            console.error(`Error in postData() : ${error}`);
                                        }  
}

export const postPixabayCity = async (data) => {

                                        const pixabayURL = 'http://localhost:8081/pixabay';

                                        console.log('... postPixabayCity : data.geonames[0].name = ' + data.geonames[0].name);

                                        const paramObj = {};
                                        paramObj['city'] = data.geonames[0].name;

                                        const response = fetch(pixabayURL,
                                                                { method: 'POST',
                                                                  credentials: 'same-origin',
                                                                  headers: {'Content-type':'application/json', },
                                                                  body: JSON.stringify(paramObj)
                                                                }).catch( 
                                                                    error => { console.log(`postData() fetch() error: ${error}`)}
                                                                );

                                        return data;

}