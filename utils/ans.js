
export default {
  alias: function (data) {
    const { aplus_queue } = window;
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["_user_id", data]
    });
  },
  pageView: function (name, props, callback) {
    try {
      let page_name = name;
      const { aplus_queue } = window;
      aplus_queue.push({
        action: 'aplus.sendPV',
        arguments: [{
          is_auto: false
        }, {
          //必传参数
          ts: new Date().getTime(),
          path: location.href,
          page_name,
          ...props
        }]
      });
    } catch (error) {
      console.log('err：调用quick tracking统计页面失败')
    }
  },
  track: function (eventName, eventInfo, callback) {
    let event_name = eventName;
    let event_type = 'CLK';
    try {
      const { aplus_queue } = window;
      aplus_queue.push({
        action: 'aplus.record',
        arguments: [event_name, event_type, {
          ...eventInfo
        }]
      });
    } catch (error) {
      console.log('err：调用quick tracking统计事件失败')
    }
  },
  profileSet: function (data) {
    const { aplus_queue } = window;
    aplus_queue.push({
      'action': 'aplus.record',
      'arguments': ['$$_user_profile', 'OTHER', {
        ...data
      }]
    });
  }
}