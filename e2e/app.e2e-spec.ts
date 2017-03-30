import { Ng2MaterialCompAppPage } from './app.po';

describe('ng2-material-comp-app App', function() {
  let page: Ng2MaterialCompAppPage;

  beforeEach(() => {
    page = new Ng2MaterialCompAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
