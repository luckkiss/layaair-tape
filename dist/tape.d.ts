declare module Tape {

    /**
     * isMiniGame
     */
    function isMiniGame(): boolean;

    /**
     * isConchApp
     */
    function isConchApp(): boolean;

    /**
     * init
     * @param width 宽度
     * @param height 高度
     * @param options 其他拓展
     */
    function init(width: number, height: number, ...options): void;

    /**
     * exit
     */
    function exit(): void;

    /**
     * createNavigator
     * @param routes routes
     * @param initName initName
     * @param options options
     */
    function createNavigator(routes, initName, options?: Object);

    ///////////////////////////////////////////////
    ////// Component
    ///////////////////////////////////////////////

    /**
     * Activity
     */
    class Activity {

        static ROUTE(options?: Object): Object;

        public readonly props: Object;
        public readonly params: Object;
        public readonly routeName: string;
        public readonly routeKey: string;
        /**
         * in anim
         */
        protected inEase: Function;
        protected inEaseDuration: number;
        protected inEaseFromProps: Object;
        protected inEaseToProps: Object;
        /**
         * out anim
         */
        protected outEaseDuration: number;
        protected outEase: Function;
        protected outEaseFromProps: Object;
        protected outEaseToProps: Object;

        ///////////////////////
        //// Extends component props
        ///////////////////////

        gray: boolean;
        disabled: boolean;
        tag: any;
        top: number;
        bottom: number;
        left: number;
        right: number;
        centerX: number;
        centerY: number;
        anchorX: number;
        anchorY: number;
        scaleX: number;
        scaleY: number;
        height: number;
        readonly displayHeight: number;
        width: number;
        readonly displayWidth: number;
        layoutEnabled: boolean;

        protected addChild(clild: any);

        ///////////////////////
        /// Constructor
        ///////////////////////

        constructor(props?: Object);

        ///////////////////////
        /// LifeCycle
        ///////////////////////

        /**
         * onCreate
         */
        protected onCreate(): void;

        /**
         * onResume
         */
        protected onResume(): void;

        /**
         * onPause
         */
        protected onPause(): void;

        /**
         * onDestroy
         */
        protected onDestroy(): void;

        /**
         * onNextProgress
         * @param progress progress
         */
        protected onNextProgress(progress: number): void;

        ///////////////////////
        /// Navigator
        ///////////////////////

        /**
         * redirectTo
         */
        protected redirectTo(name, params?): boolean;

        /**
         * navigate
         */
        protected navigate(name, params?, action?: Function): boolean;

        /**
         * deeplink
         */
        protected deeplink(url, action?: Function): boolean;

        /**
         * finish self
         */
        protected back(): void;

        /**
         * finish activity
         */
        protected finish(name): void;

        /**
         * pop count , n default 1
         */
        protected pop(n?: number): void;

        /**
         * pop to top
         */
        protected popToTop(): void;

    }

    /**
     * Dialog
     */
    class Dialog {

        /**
         * showDialog
         * @param dialog dialog ui
         * @param onOpened onOpened callback
         * @param onClosed onClosed callback
         */
        static showDialog(dialog, onOpened?: Function, onClosed?: Function): void;

        /**
         * closeDialog
         */
        static closeDialog(): void;

        /**
         * showLockView
         * @param lockView lockView
         */
        static showLockView(lockView): void;

        /**
         * closeLockView
         */
        static closeLockView(): void;
    }

    /**
     * Toast
     */
    class Toast {

        /**
         * showToast
         * @param view show toast view
         * @param duration duration default 500 ms
         * @param previousHnadler previous hnadler callback
         */
        static showToast(view, duration?: number, previousHnadler?: Function): void;

    }

    ///////////////////////////////////////////////
    ////// Utils
    ///////////////////////////////////////////////

    /**
     * Build
     */
    class Build {

        /**
         * configEnv
         * @param env development or production
         */
        static configEnv(env: string);

        /**
         * get build env
         * @return env mode : development or production
         */
        static getEnv(): string;

        /**
         * isDebug
         */
        static isDebug(): boolean;

    }

    /**
     * NumUtil
     */
    class NumUtil {

        /**
         * rangedNum
         * @param val curr number
         * @param min min number
         * @param max max number
         */
        static rangedNum(val: number, min: number, max: number): number;

        /**
         * randomFloat
         * @param min min number default 0
         * @param max max number default 1
         */
        static randomFloat(min?: number, max?: number): number;

        /**
         * randomInteger
         * @param min min number
         * @param max max number
         */
        static randomInteger(min: number, max: number): number;

    }

    /**
     * UUID
     */
    class UUID {

        /**
         * randUUID
         */
        static randomUUID(): string;

    }

    /**
     * Logger
     */
    class Logger {

        /**
         * print console log
         */
        static log(message?: any, ...optionalParams: any[]): void;

        /**
         * print console error log
         */
        static error(message?: any, ...optionalParams: any[]): void;

        /**
         * print console info log
         */
        static info(message?: any, ...optionalParams: any[]): void;

        /**
         * print console warn log
         */
        static warn(message?: any, ...optionalParams: any[]): void;

        /**
         * print console debug log
         */
        static debug(message?: any, ...optionalParams: any[]): void;

    }

    /**
     * Bus
     */
    class Bus {

        static post(event: string, data: any): void;

        static on(event: string, callback: Function): void;
    }

    ///////////////////////////////////////////////
    ////// Media
    ///////////////////////////////////////////////

    /**
     * BackgroundMusic
     */
    class BackgroundMusic {

        /**
         * play background music
         * @param url url
         * @param loops loops count,default 1
         * @param complete complete callback
         */
        public static play(url: String, loops?: number, complete?: Function): void;

        /**
         * stop background music
         */
        public static stop(): void;

        /**
         * pause audio
         */
        public static pause(): void;
    }

    /**
     * Audio
     */
    class Audio {

        /**
         * config audio
         * @param dir sound dir for web
         * @param ext sound ext for web
         * @param conchDir sound dir for conch
         */
        public static config(dir: string, ext: string, conchDir: string, conchExt: string);

        /**
         * play audio
         * @param url url
         * @param loops loops count,default 1
         * @param complete complete callback
         */
        public static play(url: String, loops?: number, complete?: Function): Audio;

        /**
         * constructor
         * @param url sound url
         */
        constructor(url: String);

        /**
         * play audio
         * @param loops loops count,default 1
         * @param complete complete callback
         */
        public play(loops?: number, complete?: Function): void;

        /**
         * stop audio
         */
        public stop(): void;

        /**
         * pause audio
         */
        public pause(): void;

    }

    ///////////////////////////////////////////////
    ////// Socket
    ///////////////////////////////////////////////

    /**
     * WebSocket
     */
    class WebSocket {

        onConnecting: Function;
        onConnected: Function;
        onClosed: Function;
        onError: Function;
        onMessageReceived: Function;

        /**
         * @param socketUrl     socket url
         */
        connect(socketUrl: String): void;

        /**
         * disconnect
         */
        disconnect(): void;

        /**
         * @return is connected
         */
        isConnected(): boolean;

        /**
         * @return is connecting
         */
        isConnecting(): boolean;

        /**
         * @param message socket message
         */
        publishMessage(message: any): void;

    }

    /**
     * MQTTSocket
     */
    class MQTTSocket {

        onConnecting: Function;
        onConnected: Function;
        onClosed: Function;
        onError: Function;
        onMessageReceived: Function;
        onMessageDelivered: Function;

        /**
         * @param host     mqtt host
         * @param port     mqtt port
         * @param clientId     mqtt clientId
         * @param username     mqtt username
         * @param password     mqtt password
         * @param options     mqtt options
         */
        connect(host: string, port: number, clientId: string, username?: string, password?: string, options?: Object): void;

        /**
         * disconnect
         */
        disconnect(): void;

        /**
         * @return is connected
         */
        isConnected(): boolean;

        /**
         * @return is connecting
         */
        isConnecting(): boolean;

        /**
         * @param topic     mqtt topic
         * @param message     mqtt message
         * @param qos     mqtt qos
         * @param retained     mqtt retained
         */
        publishMessage(topic: string, message: any, qos?: number, retained?: boolean): void;

    }

    ///////////////////////////////////////////////
    ////// Mini
    ///////////////////////////////////////////////

    /**
     * MiniVersion
     */
    class MiniVersion {
        public static checkVersion(onShowLoading: Function, onFailed: Function): void;
    }

    /**
     * MiniLogin
     */
    class MiniLogin {

        /**
         * 获取应用参数信息
         */
        public static getParamData(): Object;

        /**
         * 获取登录相关信息
         */
        public static getLoginData(): Object;


        /**
         * 显示登录界面
         * @param options 按钮位置信息bgPage,type,text,image,x,y,width,height
         * @param successCallback 获取用户信息成功回调
         * @param failCallback 失败回调
         * @param completeCallback 完成回调，失败成功都会回调
         */
        public static showLoginPage(options, successCallback: Function, failCallback?: Function, completeCallback?: Function): void;

        /**
         * 隐藏登录界面
         */
        public static hideLoginPage(): void;

    }

    /**
     * MiniGameClub
     */
    class MiniGameClub {

        /**
         * 显示游戏圈按钮
         * @param options 按钮位置信息icon,top,left,width,height
         * @param onTap 点击回调
         */
        public static showGameClubButton(options, onTap: Function): void;

        /**
         * 隐藏游戏圈按钮
         */
        public static hideGameClubButton(): void;

    }

    /**
     * MiniKefu
     */
    class MiniKefu {

        /**
         * 进入客服会话。后台接入方式与小程序一致
         * @param options 分享的信息，sessionFrom,showMessageCard,sendMessageTitle,sendMessagePath,sendMessageImg
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static openCustomerServiceConversation(options: Object, success?: Function, fail?: Function, complete?: Function): void;

    }

    /**
     * MiniOpenData
     */
    class MiniOpenData {

        /**
         * 是否支持开放数据域Canvas
         */
        public static isSupportSharedCanvasView(): boolean;

        /**
         * 显示开放数据域Canvas
         */
        public static showSharedCanvasView(bgPage, data?: Object): void;

        /**
         * 隐藏开放数据域Canvas
         */
        public static hideSharedCanvasView(): void;

        /**
         * 设置用户游戏数据到开放数据域
         */
        public static setUserCloudStorage(dataList): void;

        /**
         * 删除用户托管数据当中对应 key 的数据。
         */
        public static removeUserCloudStorage(keyList: string[]): void;
    }

    /**
     * MiniShare
     */
    class MiniShare {

        /**
         * 显示转发菜单按钮
         * @param options 分享的信息，title，imageUrl，query
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static showShareMenu(options: Object, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 更新转发菜单按钮
         * @param options 分享的信息，title，imageUrl，query
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static updateShareMenu(options: Object, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 隐藏转发菜单按钮
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static hideShareMenu(success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 主动转发
         * @param options 分享的信息，title，imageUrl，query
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static shareAppMessage(options: Object, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 获取转发详细信息
         * @param shareTicket shareTicket
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static getShareInfo(shareTicket: string, success?: Function, fail?: Function, complete?: Function): void;
    }

    /**
     * MiniAd
     */
    class MiniAd {

        /**
         * 显示激励型视频广告
         * @param adUnitId 广告单元ID
         * @param onRewarded 完成回调，发放奖励
         * @param onError 错误回调
         */
        public static showRewardedVideoAd(adUnitId: string, onRewarded?: Function, onError?: Function): void;

        /**
         * 显示Banner广告
         * @param adUnitId 广告单元ID
         * @param options Banner位置信息top,left,width,height
         **/
        public static showBannerAd(adUnitId: string, options: Object): void;

    }

    /**
     * MiniDisplay
     */
    class MiniDisplay {

        /**
         * 根据用户当天游戏时间判断用户是否需要休息
         * @param todayPlayedTime 今天已经玩游戏的时间，单位：秒
         * @param success 成功回调 result
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static checkIsUserAdvisedToRest(todayPlayedTime, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
         * @param type wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
         * @param success 成功回调 result
         * @param fail 失败回调
         * @param complete 完成回调，失败成功都会回调
         */
        public static getLocation(type?: string, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 使手机发生较短时间的振动（15 ms）
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static vibrateShort(success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 使手机发生较长时间的振动（400 ms)
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static vibrateLong(success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 显示Loading
         * @param title 提示的内容
         * @param mask 是否显示透明蒙层
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static showLoading(title: string, mask: boolean, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 隐藏Loading
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static hideLoading(success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 弹出对话框
         * @param options 分享的信息，title，content，showCancel, cancelText, confirmText
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static showModal(options, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 获取设备电量
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static getBatteryInfo(success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 设置系统剪贴板的内容
         * @param data 剪贴板的内容
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static setClipboardData(data: string, success?: Function, fail?: Function, complete?: Function): void;

        /**
         * 获取系统剪贴板的内容
         * @param success 成功回调
         * @param fail 失败回调
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        public static getClipboardData(success?: Function, fail?: Function, complete?: Function): void;

    }

}