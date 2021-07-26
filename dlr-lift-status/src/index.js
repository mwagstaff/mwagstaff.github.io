import got from 'got';

const uri = 'https://api.tfl.gov.uk/StopPoint/Mode/dlr/Disruption';

async function main() {
  const {data} = await got.get(uri).json();
  console.log(data);
}

main();