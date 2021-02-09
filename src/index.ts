import Web3Instance from './web3';
// import current from './rawData/results-0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';
// import old from './rawData/results-0x314159265dD8dbb310642f98f50C066173C1259b';
// import fs from 'fs';

const web3Instance = Web3Instance.getInstance();
web3Instance.getPastEvents();

  // console.log(current.length);
  // const uniqueResolvers = new Set<string>();
  // const uniqueNodes = new Set<string>();
  // let totalRecords = 0;
  // for (const entry of current) {
  //   uniqueResolvers.add(entry.resolver);
  //   uniqueNodes.add(entry.token);
  // };

  // for (const entry of old) {
  //   uniqueResolvers.add(entry.resolver);
  //   uniqueNodes.add(entry.token);
  // };
  // totalRecords = current.length + old.length;
  // console.log(`there are ${totalRecords} total records`);
  // console.log(`there are ${uniqueResolvers.size} unique resolvers`);
  // console.log(`there are ${uniqueNodes.size} unqiue tokens`);
  // const map = {};
  // for (const entry of current) {
  //   if (map[entry.resolver]) {
  //     map[entry.resolver].push(entry.token);
  //   } else {
  //     map[entry.resolver] = [entry.token];
  //   }
  // }
  // for (const entry of old) {
  //   if (map[entry.resolver]) {
  //     map[entry.resolver].push(entry.token);
  //   } else {
  //     map[entry.resolver] = [entry.token];
  //   }
  // }
  // console.log(uniqueResolvers);
  // fs.writeFileSync('uniqueResolvers.json', JSON.stringify(Array.from(uniqueResolvers)));
  // fs.writeFileSync('map.json', JSON.stringify(map));
