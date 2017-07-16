import { DevMeetingsAppPage } from './app.po';

describe('dev-meetings-app App', () => {
  let page: DevMeetingsAppPage;

  beforeEach(() => {
    page = new DevMeetingsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
