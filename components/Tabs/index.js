// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.tabs');

const promise = axios.get('https://lambda-times-backend.herokuapp.com/topics')
promise.then(data => {
    console.log('response', data.data.topics);
    const topix = data.data.topics
    topix.forEach(topic => {
       const element = createTab(topic)
       topics.append(element)
    })
})
.catch(error => {
    console.log('You Done Goofed', error)
})

const topics = document.querySelector('.topics');

function createTab(topic) {
    const tab = document.createElement('div');
    tab.textContent = `${topic}`;
    tab.classList.add('tab');

    return tab;
};