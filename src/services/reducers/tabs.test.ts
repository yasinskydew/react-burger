import tabsReducer, { selectActiveTab } from './tabs';
import { getTabs } from '../types';

const initialState = {
  tabs: getTabs(),
  activeTab: getTabs()[0],
};

describe('tabs reducer', () => {
  it('should return the initial state', () => {
    expect(tabsReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle selectActiveTab with valid id', () => {
    const tabId = getTabs()[1].id;
    const state = tabsReducer(initialState, selectActiveTab(tabId));
    expect(state.activeTab).toEqual(getTabs()[1]);
  });

  it('should handle selectActiveTab with invalid id (fallback to first tab)', () => {
    const state = tabsReducer(initialState, selectActiveTab('invalid'));
    expect(state.activeTab).toEqual(getTabs()[0]);
  });
}); 