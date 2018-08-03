import csvjson from 'csvjson';
import path from 'path';
import fs from 'fs';
import appRoot from 'app-root-path';

export const csvToJson = (csv) => {
  let file = fs.readFileSync(path.join(appRoot.path, csv), { encoding : 'utf8'});
  let options = {
    delimiter : ',',
    quote     : '"'
  };

  return csvjson.toObject(file, options);
};