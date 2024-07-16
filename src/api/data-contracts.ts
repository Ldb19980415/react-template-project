/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AnalyzerAlertCategoryCard {
  /** @gotags: json:"children" */
  children?: AnalyzerTextXLineChart;
  /** @gotags: json:"nowValue" */
  nowValue?: number;
  /** @gotags: json:"title" */
  title?: string;
  /** @gotags: json:"unit" */
  unit?: string;
  /** @gotags: json:"value" */
  value?: number;
}

export interface AnalyzerAlertDashboardDataResponse {
  /** @gotags: json:"alertCard" */
  alertCard?: AnalyzerAlertCategoryCard[];
  /** @gotags: json:"alertLevel" */
  alertLevel?: AnalyzerPieChartData[];
  /** @gotags: json:"alertPie" */
  alertPie?: AnalyzerPieChartData[];
}

export interface AnalyzerAlertDataList {
  /** 预警种类大 @gotags: ch:"big_type1" json:"big_type" */
  big_type?: string;
  /** 预警内容 @gotags: ch:"context" json:"content" */
  content?: string;
  /** 预警时间 @gotags: ch:"time" json:"created_time" */
  created_time?: number;
  /** 预警等级 @gotags: ch:"level" json:"level" */
  level?: number;
  /** 预警策略 @gotags: ch:"alert_name" json:"name" */
  name?: string;
  /** 云ID @gotags: ch:"region_id" json:"region_id" */
  region_id?: string;
  /** 预警种类小 @gotags: ch:"small_type1" json:"small_type" */
  small_type?: string;
  /** 预警来源 @gotags: ch:"source" json:"source" */
  source?: string;
  /** 告警的uuid @gotags: ch:"uuid" json:"uuid" */
  uuid?: string;
}

export interface AnalyzerArenaChartData {
  /** 区域 @gotags: json:"name" ch:"arena" */
  name?: string;
  /** 值 @gotags: json:"value" ch:"value" */
  value?: number;
}

export interface AnalyzerArenaChartDataList {
  /** @gotags: json:"arenaChartData" */
  arenaChartData?: AnalyzerArenaChartData[];
}

export enum AnalyzerCalendarChartType {
  CalendarChartTypeFakeData = 0,
  CalendarChartTypeCCTCryptoEvaluateDeviceSecretAssessment = 1,
  CalendarChartTypeCCTCryptoEvaluateAlgorithmicSecretAssessment = 2,
  CalendarChartTypeCCTCryptoEvaluateProtocolSecretAssessment = 3,
  CalendarChartTypeCCTCryptoEvaluateCertificateSecretAssessment = 4,
}

export interface AnalyzerCalendarItem {
  /** y轴数据 (数字类型) @gotags: json:"count" */
  count?: number;
  /** x轴数据 @gotags: json:"date" */
  date?: string;
}

export interface AnalyzerCalendarResponse {
  /** 图表数据 @gotags: json:"calendarItem" */
  calendarItem?: AnalyzerCalendarItem[];
  /** 年份 @gotags: json:"maxNum" */
  maxNum?: number;
  /** 标题 @gotags: json:"title" */
  title?: string;
  /** @gotags: json:"type" */
  type?: AnalyzerCalendarChartType;
  /** 年份 @gotags: json:"year" */
  year?: string;
}

export interface AnalyzerCommonChartData {
  /** 图例 @gotags: json:"legend" */
  legend?: string;
  /** x轴数据 @gotags: json:"xData" */
  xData?: number;
  /** y轴数据 (数字类型) @gotags: json:"yData" */
  yData?: number;
}

export interface AnalyzerCommonLineChart {
  /** @gotags: json:"accuracy" */
  accuracy?: number;
  /** @gotags: json:"chartData" */
  chartData?: AnalyzerCommonChartData[];
  /** @gotags: json:"chartType" */
  chartType?: string;
  /** @gotags: json:"title" */
  title?: string;
  /** @gotags: json:"unit" */
  unit?: string;
  /** @gotags: json:"xType" */
  xType?: string;
}

export interface AnalyzerCommonResponse {
  optStatus?: string;
}

export interface AnalyzerConfidentialAssessmentInconsistentItem {
  /** 算法 @gotags: json:"algorithmNum" */
  algorithmNum?: number;
  /** 应用名称 @gotags: json:"appName" */
  appName?: string;
  /** 密码设备 @gotags: json:"deviceNum" */
  deviceNum?: number;
  /** 协议 @gotags: json:"protocolNum" */
  protocolNum?: number;
  /** 总数 @gotags: json:"totalNum" */
  totalNum?: number;
}

export interface AnalyzerConfidentialAssessmentInconsistentResponse {
  data?: AnalyzerConfidentialAssessmentInconsistentItem[];
}

export interface AnalyzerFlowYOYChartData {
  /** @gotags: json:"diffValue" */
  diffValue?: number;
  /** @gotags: json:"isIncreasing" */
  isIncreasing?: boolean;
  /** @gotags: json:"last" */
  last?: number;
  /** @gotags: json:"now" */
  now?: number;
  /** @gotags: json:"percent" */
  percent?: number;
  /** @gotags: json:"unit" */
  unit?: string;
}

export interface AnalyzerGetAlertDataListResponse {
  cr?: AnalyzerCommonResponse;
  /** 每行数据 */
  data?: AnalyzerAlertDataList[];
  /** @gotags: ch:"total" json:"total" */
  total?: number;
}

export interface AnalyzerGetAlertDataResponse {
  cr?: AnalyzerCommonResponse;
  /** 每行数据 */
  data?: AnalyzerAlertDataList[];
}

export interface AnalyzerGetAlertInfoIDData {
  /** 算法 @gotags: json:"alogrithm" ch:"alogrithm" */
  alogrithm?: string;
  /** 预警种类大 @gotags: json:"big_type" ch:"big_type1" */
  big_type?: string;
  /** 总流量 @gotags: json:"byte" ch:"byte" */
  byte?: number;
  /** 证书 @gotags: json:"cert" ch:"cert" */
  cert?: string[];
  /** 城市 @gotags: json:"city" ch:"city" */
  city?: string;
  /** 组件 @gotags: json:"component" ch:"component" */
  component?: string;
  /** 国家 @gotags: json:"country" ch:"country" */
  country?: string;
  /** 区域 @gotags: json:"district" ch:"district" */
  district?: string;
  /** 对应l4或者l7的_id @gotags: json:"log_id" ch:"log_id" */
  log_id?: number;
  /** 总包数 @gotags: json:"packet" ch:"packet" */
  packet?: number;
  /** 协议 @gotags: json:"protocol" ch:"protocol_str" */
  protocol?: string;
  /** 省份 @gotags: json:"province" ch:"province" */
  province?: string;
  /** 区域 @gotags: json:"region_name" ch:"region_name" */
  region_name?: string;
  /** 预警种类小 @gotags: json:"small_type" ch:"small_type1" */
  small_type?: string;
  /** 预警来源 @gotags: json:"source" ch:"source" */
  source?: string;
  /** 目标 @gotags: json:"target" ch:"target" */
  target?: string;
  /** 时间 @gotags: json:"time" ch:"time" */
  time?: string;
  /** TLS版本 @gotags: json:"tls_version" ch:"tls_version" */
  tls_version?: string;
  /** 漏洞算法 @gotags: json:"vuln_algorithm" ch:"vuln_algorithm" */
  vuln_algorithm?: string;
  /** 漏洞组件 @gotags: json:"vuln_component" ch:"vuln_component" */
  vuln_component?: string;
  /** 漏洞协议 @gotags: json:"vuln_protocol" ch:"vuln_protocol" */
  vuln_protocol?: string;
}

export interface AnalyzerGetAlertInfoIDResponse {
  data?: AnalyzerGetAlertInfoIDData[];
}

export interface AnalyzerGetCipherInfoResponse {
  cipher?: string;
  protocol?: string;
  x509Data?: AnalyzerX509Info[];
}

export interface AnalyzerGetSecurityConfigChildren {
  category?: string;
  label?: string;
  type?: number;
  unit?: string;
  value?: string;
}

export interface AnalyzerGetSecurityConfigChildrenList {
  children?: AnalyzerGetSecurityConfigChildren[];
  label?: string;
  value?: string;
}

export interface AnalyzerLesMiserablesCategories {
  name?: string;
}

export interface AnalyzerLesMiserablesLinks {
  source?: string;
  target?: string;
}

export interface AnalyzerLesMiserablesNodes {
  /** @gotags: json:"category" */
  category?: number;
  /** @gotags: json:"id" */
  id?: string;
  /** @gotags: json:"name" */
  name?: string;
  /** @gotags: json:"symbolSize" */
  symbolSize?: number;
  /** @gotags: json:"value" */
  value?: number;
}

export interface AnalyzerLesMiserablesResponse {
  /** 色块 */
  categories?: AnalyzerLesMiserablesCategories[];
  /** 关系 */
  links?: AnalyzerLesMiserablesLinks[];
  /** 结点 */
  nodes?: AnalyzerLesMiserablesNodes[];
}

export interface AnalyzerPassWordAttackCardResponse {
  /** 流量强度卡片 */
  AttackFlow?: AnalyzerFlowYOYChartData;
  /** 嫌疑地卡片 */
  AttackLocation?: AnalyzerFlowYOYChartData;
  /** 攻击数量卡片 */
  AttackNum?: AnalyzerFlowYOYChartData;
}

export interface AnalyzerPasswordAlgorithmList {
  /** 密码算法 @gotags: json:"alogrithm" ch:"alogrithm" */
  alogrithm?: string;
  /** 应用名称 @gotags: json:"appName" ch:"appName" */
  appName?: string;
  /** 组件名称 @gotags: json:"component" ch:"component" */
  component?: string;
  /** 设备名称 @gotags: json:"deviceName" ch:"deviceName" */
  deviceName?: string;
  /** 产品种类 @gotags: json:"deviceType" ch:"deviceType" */
  deviceType?: string;
  /** 设备ID @gotags: json:"id" ch:"id" */
  id?: number;
  /** 密码协议 @gotags: json:"protocol" ch:"protocol" */
  protocol?: string;
  /** 云名称 @gotags: json:"regionName" ch:"regionName" */
  regionName?: string;
}

export interface AnalyzerPieChartData {
  /** legend @gotags: json:"item" ch:"item" */
  item?: string;
  /** 百分比 @gotags: json:"percent" ch:"percent" */
  percent?: number;
  /** 单位 @gotags: json:"unit" ch:"unit" */
  unit?: string;
  /** 值 @gotags: json:"value" ch:"value" */
  value?: number;
}

export interface AnalyzerPieChartDataList {
  /** 饼图数据 @gotags: json:"pieChartData" */
  pieChartData?: AnalyzerPieChartData[];
}

export interface AnalyzerRankChartData {
  /** 索引 @gotags: json:"index" */
  index?: number;
  /** 名称 @gotags: json:"name" */
  name?: string;
  /** 单位 @gotags: json:"unit" */
  unit?: string;
  /** 值 @gotags: json:"value" */
  value?: number;
}

export interface AnalyzerRankChartList {
  /** 排名图数据 @gotags: json:"rankChartData" */
  rankChartData?: AnalyzerRankChartData[];
}

export interface AnalyzerRiskVulnerabilityChatsResponse {
  /** 风险级别威胁,现在先使用预警等级来展示 */
  AlertLevel?: AnalyzerCommonLineChart;
  /** 使用组件风险威胁=密码设备风险预警 */
  Component?: AnalyzerCommonLineChart;
  /** 密码算法风险威胁 */
  PasswordAlgorithm?: AnalyzerCommonLineChart;
  /** 密码应用风险威胁 */
  PasswordApp?: AnalyzerCommonLineChart;
  /** 密码设备风险威胁 =bigtype:equip, smalltype:密码设备风险预警 */
  PasswordDevice?: AnalyzerCommonLineChart;
}

export interface AnalyzerRiskVulnerabilityList {
  Data?: AnalyzerPasswordAlgorithmList[];
}

export interface AnalyzerSankeyChartResponse {
  /**
   * 开始时间 秒时间戳
   * @gotags: json:"data"
   */
  data?: AnalyzerSankeyData[];
  /** @gotags: json:"links" */
  links?: AnalyzerSankeyLink[];
}

export interface AnalyzerSankeyData {
  /** @gotags: json:"depth" */
  depth?: number;
  /** @gotags: json:"id" */
  id?: string;
  /** @gotags: json:"name" */
  name?: string;
}

export interface AnalyzerSankeyLink {
  /** @gotags: json:"source" */
  source?: string;
  /** @gotags: json:"target" */
  target?: string;
  /** @gotags: json:"value" */
  value?: number;
}

export interface AnalyzerTextXChartData {
  /** 图例 @gotags: json:"legend" */
  legend?: string;
  /** x轴数据 @gotags: json:"xData" */
  xData?: string;
  /** y轴数据 (数字类型) @gotags: json:"yData" */
  yData?: number;
}

export interface AnalyzerTextXLineChart {
  /** 粒度 @gotags: json:"accuracy" */
  accuracy?: number;
  /** 图表数据 @gotags: json:"chartData" */
  chartData?: AnalyzerTextXChartData[];
  /** 图表类型  vcpu等 @gotags: json:"chartType" */
  chartType?: string;
  /** 标题 @gotags: json:"title" */
  title?: string;
  /** 单位 @gotags: json:"unit" */
  unit?: string;
  /** x轴类型 time-s(秒时间戳) time-ms(毫秒时间戳)  text(文本) @gotags: json:"xType" */
  xType?: string;
}

export enum AnalyzerTreemapChartType {
  TreemapChartTypeTreemapFakeData = 0,
  TreemapChartTypeCryptoDeviceFlowRate = 1,
}

export interface AnalyzerTreemapItem {
  /** x轴数据 @gotags: json:"name" */
  name?: string;
  /** x轴数据 @gotags: json:"path" */
  path?: string;
  /** y轴数据 (数字类型) @gotags: json:"value" */
  value?: number;
}

export interface AnalyzerTreemapResponse {
  /** 标题 @gotags: json:"title" */
  title?: string;
  /** 图表数据 @gotags: json:"treemapItem" */
  treemapItem?: AnalyzerTreemapItem[];
  /** @gotags: json:"type" */
  type?: AnalyzerTreemapChartType;
}

export interface AnalyzerWordCloudChartData {
  /** 样式属性 @gotags: json:"category" */
  category?: string;
  /** 文字内容 @gotags: json:"content" ch:"content" */
  content?: string;
  /** 汇总数量 @gotags: json:"total" ch:"total" */
  total?: number;
}

export interface AnalyzerWordCloudChartResponse {
  /** 粒度 @gotags: json:"accuracy" */
  accuracy?: number;
  /** 图表数据 @gotags: json:"chartData" */
  chartData?: AnalyzerWordCloudChartData[];
  /** 图表类型  vcpu等 @gotags: json:"chartType" */
  chartType?: string;
  /** 标题 @gotags: json:"title" */
  title?: string;
  /** 单位 @gotags: json:"unit" */
  unit?: string;
  /** x轴类型 time-s(秒时间戳) time-ms(毫秒时间戳)  text(文本) @gotags: json:"xType" */
  xType?: string;
}

export interface AnalyzerX509Info {
  /** 证书链有效性 */
  chainValidity?: number;
  /** 证书16进制 */
  hexStr?: string;
  /** IP */
  iPAddresses?: string;
  /** 颁发者 */
  issuerCommonName?: string;
  /** 颁发者组织 */
  issuerOrganization?: string;
  /** 颁发者单位 */
  issuerOrganizationalUnit?: string;
  /** 截止日期 */
  notAfter?: string;
  /** 颁发日期 */
  notBefore?: string;
  /** 公钥算法 */
  publicKeyAlgorithm?: string;
  /** 序列号 */
  serialNumber?: string;
  /** 加密算法 */
  singleSignatureAlgorithm?: string;
  /** 通用名称 */
  subjectCommonName?: string;
  /** 国家 */
  subjectCountry?: string;
  /** 城市 */
  subjectLocality?: string;
  /** 组织机构 */
  subjectOrganization?: string;
  /** 组织单位 */
  subjectOrganizationalUnit?: string;
  /** 省份 */
  subjectProvince?: string;
  /** 证书有效性 */
  validity?: number;
}

export interface BaseField {
  /** 分类 */
  category?: string;
  /** 字段 */
  field?: string;
  /** 字段类型 */
  fieldType?: string;
  /** 主键ID */
  id?: number;
  /** 是否为主指标 */
  mainFlag?: string;
  /** 组合字段 */
  moduleValue?: string;
  /** 名称 */
  name?: string;
  /** 表名 */
  tableName?: string;
  /** 阈值 */
  threshold?: string;
  /** 类型 groupMetrics指标 detailMetrics指标  tag标签 */
  type?: string;
  /** 单位 */
  unit?: string;
}

export interface BaseFlowChartData {
  /** 结束时间 */
  end?: number;
  /** 过滤条件 */
  filter?: Record<string, string[]>;
  /** 限制条数 */
  limit?: number;
  /** 位置 */
  location?: string;
  /** 模块 */
  module?: string;
  /** L4网络层 L7应用层 */
  netType?: string;
  /** asc or desc */
  orderBy?: string;
  /** 排序的字段 */
  orderKey?: string;
  /** 开始时间 */
  start?: number;
  /** 表名 */
  tableName?: string;
}

export interface BaseFlowPageData {
  /** 结束时间 */
  end?: number;
  /** 过滤条件 */
  filter?: Record<string, string[]>;
  /** 位置 */
  location?: string;
  /** 模块 */
  module?: string;
  /** L4网络层 L7应用层 */
  netType?: string;
  /** asc or desc */
  orderBy?: string;
  /** 排序的字段 */
  orderKey?: string;
  /** 页码 */
  page?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 开始时间 */
  start?: number;
  /** 表名 */
  tableName?: string;
}

export interface BaseSelectField {
  /** 主指标字段 */
  mainField?: BaseField;
  /** 指标字段 */
  metricField?: BaseField[];
  /** 标签字段 */
  tagField?: BaseField[];
  /** 标签值字段 用来查询用的 字段 */
  tagValueField?: string[];
}

export interface CommonGlobalComponent {
  /** 主键ID */
  id?: string;
  /** 组件名称 */
  name: string;
  /** 组件备注 */
  remark?: string;
  /** 组件版本 */
  version: string;
}

export interface CommonOption {
  /** 名称 */
  label?: string;
  /** 值 */
  value?: string;
}

export interface MongoUniversal {
  /** 语言 */
  lang?: string;
  /** 漏洞解决方案信息 */
  supportingMedia?: {
    /** 是否是 base64 编码 */
    base64?: boolean;
    /** 信息类型 */
    type?: string;
    /** 漏洞解决方案信息 */
    value?: string;
  }[];
  /** 漏洞解决方案描述 */
  value?: string;
}

export interface MysqlFlowMetricsField {
  /** 聚合函数 */
  aggFunc?: string;
  /** 百分比值 */
  aggPercent?: number;
  /** 聚合类型 */
  aggType?: string;
  /** 字段分类 */
  category?: string;
  /** 字段 */
  field?: string;
  /** 主键ID */
  id?: number;
  /** 名称 */
  name?: string;
  /** 层次 L4 网络层  L7 应用层 */
  netType?: string;
  /** 表名 */
  tableName?: string;
  /** 阈值 */
  threshold?: string;
  /** 字段类型 */
  type?: number;
  /** 字段单位 */
  unit?: string;
  /** 组合字段 */
  value?: string;
}

export interface MysqlSysUser {
  /** 创建时间 */
  createdAt?: string;
  /** 用户邮箱 */
  email?: string;
  /** 用户是否被冻结 1正常 2冻结 */
  enable?: number;
  /** 主键ID */
  id?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户手机号 */
  phone?: string;
  /** 更新时间 */
  updatedAt?: string;
  /** 用户登录名 */
  userName?: string;
  /** 用户UUID */
  uuid?: string;
}

export interface RedisNet {
  ip?: string;
  port?: number;
}

export interface RedisTimlyAlertStrategy {
  /** 告警大类 */
  bigType?: string;
  /** 告警的UUID列表 */
  ids?: string[];
  /** 告警级别 */
  level?: number;
  /** 告警小类 */
  smallType?: string;
  /** 告警名称 */
  strategy?: string;
  /** 告警时间 */
  time?: number;
  /** 唯一ID */
  uuid?: string;
}

export interface RedisTimlyPasswordAttack {
  /** 告警大类 */
  bigType?: string;
  /** 流量大小 */
  byte?: number;
  /** 流量单位 */
  byteUnit?: string;
  /** 告警小类 */
  smallType?: string;
  /** 来源城市 */
  sourceCity?: string;
  /** 来源国家 */
  sourceCountry?: string;
  /** 来源ip */
  sourceIP?: string;
  /** 告警时间 */
  time?: number;
  /** 唯一ID */
  uuid?: string;
}

export interface RequestAlertInfo {
  /** 告警ID */
  id?: string[];
}

export interface RequestAlertInfoIDList {
  /** 告警ID */
  id?: string;
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestAlertList {
  /** 预警结束时间 */
  end?: number;
  /** 预警级别 1 重要告警 2 一般告警 3 轻微告警 */
  level?: number;
  /** 页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 预警开始时间 */
  start?: number;
  /** 预警策略 UUID 数组 */
  uuid?: string[];
  /** 预警种类数组 */
  value?: string[][];
}

export interface RequestAlgorithmSecretAssessmentCurved {
  /** 算法 */
  algorithmic?: string[];
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestAllCloudReq {
  /** 云集群名称 */
  name?: string;
}

export interface RequestAllCommercialReq {
  /** 产品种类名称 */
  name?: string;
}

export interface RequestAllCryptoReq {
  /** 产品型号 */
  model?: string;
  /** 厂商id */
  producerId?: number;
  /** 产品种类id */
  productId?: number;
}

export interface RequestAllDatabaseReq {
  /** 云集群 */
  cloud?: number;
  /** 数据库名称 */
  name?: string;
  /** 支持商密 1 支持 2 不支持 */
  support?: number;
}

export interface RequestAllPhysicalReq {
  /** 物理环境名称 */
  name?: string;
}

export interface RequestAllProducerReq {
  /** 企业厂商名称 */
  name?: string;
}

export interface RequestAllSafetyReq {
  /** 设备名称 */
  name?: string;
  /** 厂商id */
  producerId?: number;
}

export interface RequestAppCryptographicRiskVulnerabilityTrend {
  /** 应用ID */
  appId?: number[];
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestAppPortraitReqstruct {
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
}

export interface RequestAppSecretAssessmentCurved {
  /** 应用ID */
  appId?: number[];
  /** 结束时间 */
  end: number;
  /** 云集群 */
  region_id?: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestApplicationTrendReq {
  /** 结束时间 */
  end: number;
  /** 应用 ID */
  id?: number[];
  /** 云 ID */
  region_id?: number;
  /** 开始时间 */
  start: number;
}

export interface RequestApproveReq {
  /** 审批的记录的 uuid */
  id: string;
  /** 记录类型 1 密码设备 2 密码应用 3 密评信息 */
  type: number;
}

export interface RequestCert {
  /** 文件名字 */
  fileName?: string;
  /** 证书文件uuid */
  fileUuid?: string;
  /** 证书名字 */
  name?: string;
  /** 备注 */
  remark?: string;
}

export interface RequestCertDetail {
  /** 证书uuid */
  uuid?: string;
}

export interface RequestCertificateSecretAssessmentCurved {
  /** 应用ID */
  appId?: number[];
  /** 结束时间 */
  end: number;
  /** 云集群 */
  region_id?: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestChangePasswordReq {
  /** 主键ID */
  id: number;
  /** 新密码 */
  new: string;
  /** 密码 */
  password: string;
}

export interface RequestChangeSelfInfo {
  /** @example "电子邮箱" */
  email?: string;
  /** @example "int 是否启用" */
  enable?: string;
  /** 主键ID */
  id: number;
  /** @example "昵称" */
  nickName?: string;
  /** @example "电话号码" */
  phone?: string;
}

export interface RequestChangeUserInfo {
  /**
   * 电子邮箱
   * @example "电子邮箱"
   */
  email?: string;
  /**
   * 是否启用 1 启用  2 禁用
   * @example 1
   */
  enable?: number;
  /** 主键ID */
  id: number;
  /**
   * 昵称
   * @example "昵称"
   */
  nickName?: string;
  /**
   * 电话号码
   * @example "电话号码"
   */
  phone?: string;
  /** 角色ID数组 */
  roles: number[];
}

export interface RequestCipherAppDel {
  /** 应用主键ID */
  id?: number;
}

export interface RequestCipherAppDetail {
  /** 应用主键ID */
  id?: number;
  /** 应用主键UUID */
  uuid?: string;
}

export interface RequestCipherAppList {
  /** 应用名称 */
  name?: string;
  /** 当前页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 云集群ID */
  sysCloudId?: number;
  /** 服务厂商ID */
  sysProducerId?: number;
}

export interface RequestCipherAppSave {
  /** 应用介绍 */
  applications?: string;
  /** 服务领域 */
  areas?: number[];
  /** 架构组件 */
  component?: CommonGlobalComponent[];
  /** 安全设备ID 数组 */
  database?: string[];
  /** 密码设备ID 数组 */
  device?: number[];
  /** 域名 */
  domainName?: string;
  /** 应用主键ID */
  id?: number;
  /** 重要数据 */
  importData?: RequestImportData[];
  /** 内网信息 */
  intranetInfo?: RequestIpInfo[];
  /** 对外服务IP */
  ip: string;
  /** 内核版本 */
  kernel?: string;
  /** 登陆URL */
  loginUrl?: string;
  /** 应用标识 */
  logo?: string;
  /** 应用全称 */
  name: string;
  /** 网络拓扑图 */
  ntdImgs?: string[];
  /** 操作系统名称 */
  osName: string;
  /** 操作系统版本 */
  osVersion: string;
  /** 对外服务端口 */
  port: number;
  /** 支持的协议类型 */
  protocol?: string[];
  /** 数据库ID 数组 */
  safety?: string[];
  /** 应用简称 */
  shortName?: string;
  /** 云集群ID */
  sysCloudId: number;
  /** 云集群名称 */
  sysCloudName?: number;
  /** 服务厂商 */
  sysProducerId: number;
  /** 服务对象 */
  targets?: number[];
  /** 租户名 */
  tenantName?: string;
}

export interface RequestCipherDeviceDel {
  /** 应用主键ID */
  id?: number;
}

export interface RequestCipherDeviceDetail {
  /** 应用主键ID */
  id?: number;
  /** 应用主键UUID */
  uuid?: string;
}

export interface RequestCipherDeviceList {
  /** 所属云集群ID */
  cloudId?: number;
  /** 产品种类ID */
  commercialId?: number;
  /** 产品型号 */
  model?: string;
  /** 产品名称 */
  name?: string;
  /** 当前页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 产品厂商ID */
  producerId?: number;
}

export interface RequestCipherDeviceSave {
  /** 非对称算法 */
  asymmetricAlgorithm?: number[];
  /** 非对称算法(其他) */
  asymmetricAlgorithmStr?: string;
  /** 架构组件 */
  component?: CommonGlobalComponent[];
  /** 技术文档 */
  files?: RequestFileInfo[];
  /** GM/T 0053 IP地址 */
  gmt_0053_ip?: string;
  /** GM/T 0053 端口 */
  gmt_0053_port?: number;
  /** GM/T 0053 密钥 */
  gmt_0053_secret?: string;
  /** 分组算法 */
  groupingAlgorithm?: number[];
  /** 分组算法(其他) */
  groupingAlgorithmStr?: string;
  /** 哈希算法 */
  hashAlgorithm?: number[];
  /** 哈希算法(其他) */
  hashAlgorithmStr?: string;
  /** 应用主键ID */
  id?: number;
  /** 服务IP */
  ips: RequestIpInfo[];
  /** 是否支持密钥管理 */
  isKeyManage?: number;
  /** 内核版本 */
  kernel?: string;
  /** 操作系统名称 */
  osName: string;
  /** 操作系统版本 */
  osVersion: string;
  /** 其他算法 */
  otherAlgorithm?: string;
  /** 产品形态 */
  pattern?: number;
  /** 备注 */
  remark?: string;
  /** 序列算法 */
  sequencingAlgorithm?: number[];
  /** 序列算法(其他) */
  sequencingAlgorithmStr?: string;
  /** 所属云集群ID */
  sysCloudId: number;
  /** 厂商密码设备ID */
  sysCryptoId: number;
}

export interface RequestConfidentialAssessmentInconsistent {
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  type?: number;
}

export interface RequestDelIdReq {
  /** 主键ID */
  id: number;
}

export interface RequestDelRoleReq {
  /** 角色ID */
  id: number;
}

export interface RequestDelUUIDReq {
  /** 主键ID */
  id: string;
}

export interface RequestDelUser {
  /** 用户 ID */
  id?: number;
}

export interface RequestDevicePwdDeviceRiskHoleReq {
  /** 结束时间 */
  end: number;
  /** 密码设备类型IDs */
  id?: number[];
  /** 开始时间 */
  start: number;
}

export interface RequestDeviceRiskHoleReq {
  /** 结束时间 */
  end: number;
  /** 密码设备IDs */
  id?: number[];
  /** 云ID */
  region_id?: number;
  /** 开始时间 */
  start: number;
}

export interface RequestDeviceSecretAssessmentCurved {
  /** 云ID */
  deviceId?: number[];
  /** 结束时间 */
  end: number;
  /** 云ID */
  regionId?: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestDownLineUser {
  /** 用户 ID */
  id?: number;
}

export interface RequestDownLoadReq {
  /** 文件数据库存储 uuid */
  name: string;
  /** 用户当前 token */
  token: string;
}

export interface RequestEnablePolicyReq {
  /** 是否启用 1启用 2禁用 */
  enable: number;
  /** 策略id */
  id: string;
}

export interface RequestEnterReq {
  /** 密评系统ID */
  id: string;
}

export interface RequestFileInfo {
  /** 文件key */
  key?: string;
  /** 文件名 */
  name?: string;
}

export interface RequestFlowMetricsFieldSearch {
  /** 字段分类 */
  category?: string;
  /** 字段 */
  field?: string;
  /** 主键ID */
  id?: number;
  /** 名称 */
  name?: string;
  /** 层次 L4 网络层  L7 应用层 */
  netType: string;
  /** 页码 */
  page?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 表名 */
  tableName: string;
}

export interface RequestGetById {
  /** 主键ID */
  id: number;
}

export interface RequestGetStrategiesReq {
  /** 策略 ID 数组 */
  strategies: string[];
}

export interface RequestHistoryReq {
  /** 云 id */
  cloudId?: number;
  /** 结束时间 */
  end: number;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 开始时间 */
  start: number;
}

export interface RequestIdsReq {
  /** id int 数组 */
  ids?: number[];
}

export interface RequestImportData {
  /** 主要功能 */
  mainFun?: string;
  /** 数据名 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 安全需求 */
  securityRequire?: string;
  /** 存储位置 */
  storageLocation?: string;
}

export interface RequestInputReq {
  /** 文件内容 */
  file: string;
  /** 类型 1 密码设备 2 密码应用 3 密评信息 */
  type: number;
}

export interface RequestIpInfo {
  ip?: string;
  port?: number;
}

export interface RequestLogin {
  /** 验证码 */
  captcha: string;
  /** 验证码ID */
  captchaId: string;
  /** 密码 */
  password: string;
  /** 用户名 */
  username: string;
}

export interface RequestModuleFieldGet {
  /** 位置集合 (前端随意定义 用来区分哪个的字段) */
  location?: string;
  /** 模块 */
  module?: string;
  /** L4网络层 L7应用层 */
  netType?: string;
  /** 表名 */
  tableName?: string;
  /** 类型 groupMetrics指标 detailMetrics指标  tag标签 */
  type?: string;
}

export interface RequestModuleSave {
  /** 位置 (前端随意定义 用来区分哪个的字段) */
  location?: string;
  /** 主指标 */
  mainMetric?: string;
  /** 模块 */
  module?: string;
  /** L4网络层 L7应用层 */
  netType?: string;
  /** 表名 */
  tableName?: string;
  /** 类型 groupMetrics指标 detailMetrics指标  tag标签 */
  type?: string;
  /** 映射值集合 */
  values?: string[];
}

export interface RequestNetwork {
  /** 截止 IP */
  endIp?: string;
  /** 截止端口 */
  endPort?: number;
  /** 协议  1;tcp ,2:udp ,3:all */
  protocol?: number;
  /** 起始 IP */
  startIp?: string;
  /** 起始端口 */
  startPort?: number;
}

export interface RequestOperationRecordInsert {
  /** 代理 */
  agent?: string;
  /** 请求Body */
  body?: string;
  /** 创建时间 */
  createdAt?: string;
  /** 错误信息 */
  error_message?: string;
  /** 主键ID */
  id?: number;
  /** 请求ip */
  ip?: string;
  /** 延迟 */
  latency?: string;
  /** 请求方法 */
  method?: string;
  /** 页码 */
  page?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 请求路径 */
  path?: string;
  /** 响应Body */
  resp?: string;
  /** 请求状态 */
  status?: number;
  /** 更新时间 */
  updatedAt?: string;
  /** 用户id */
  user_id?: number;
}

export interface RequestOutPutCipherAppReq {
  /** 应用名称 */
  name?: string;
  /** 云集群ID */
  sysCloudId?: number;
  /** 服务厂商ID */
  sysProducerId?: number;
}

export interface RequestOutPutCipherDeviceReq {
  /** 所属云集群ID */
  cloudId?: number;
  /** 产品种类ID */
  commercialId?: number;
  /** 产品型号 */
  model?: string;
  /** 产品名称 */
  name?: string;
  /** 产品厂商ID */
  producerId?: number;
}

export interface RequestOutPutCryptoEvaluationReq {
  /** 结束时间 */
  end?: number;
  /** 密评等级 */
  level?: number;
  /** 密评名称 */
  name?: string;
  /** 开始时间 */
  start?: number;
}

export interface RequestOutPutOperationRecord {
  /** 请求方法 */
  method?: string;
  /** 请求路径 */
  path?: string;
  /** 请求状态 */
  status?: number;
}

export interface RequestPageInfo {
  /** 页码 */
  page?: number;
  /** 每页大小 */
  pageSize?: number;
}

export interface RequestPaginationInfo {
  /** 当前页码 */
  page?: number;
  /** 每页条数 */
  pageSize?: number;
}

export interface RequestPagingAlertTagInfoReq {
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestPagingCNNVDReq {
  /** 结束时间 */
  end?: number;
  /** CNVD/CVE id */
  id?: string;
  /** 危险等级 1 超危,2 高危,3 中危,低危 */
  level?: number;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 影响产品 */
  product?: string;
  /** 开始时间 */
  start?: number;
  /** 时间类型 1 收录时间 2 更新时间 */
  timeType?: number;
  /** 受影响厂商 */
  vendor?: string;
  /** 危险等级 漏洞类型 字符串 */
  vulnType?: string;
}

export interface RequestPagingCNVDReq {
  /** 结束时间 */
  end?: number;
  /** CNVD/CVE id */
  id?: string;
  /** 危险等级 1 低,2 中,3 高 */
  level?: number;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 影响产品 */
  product?: string;
  /** 开始时间 */
  start?: number;
  /** 时间类型 1 公开时间 2 报送时间 */
  timeType?: number;
}

export interface RequestPagingCVEReq {
  /** CWE漏洞类型id */
  cwe?: number;
  /** 结束时间 */
  end?: number;
  /** cve id */
  id?: string;
  /** CVSS3.x危险等级 1 None(0.0),2 Low(0.1-3.9),3 Medium(4.0-6.9),4 High(7.0-8.9),5 Critical(9.0-10.0) */
  level?: number;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 影响产品 */
  product?: string;
  /** 开始时间 */
  start?: number;
  /** 时间类型 1 公开时间 2 更新时间 */
  timeType?: number;
  /** 厂商 */
  vendor?: string;
}

export interface RequestPagingCloudReq {
  /** 云集群名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestPagingCommercialReq {
  /** 产品种类名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestPagingCryptoEvaluationReq {
  /** 结束时间 */
  end?: number;
  /** 密评等级 */
  level?: number;
  /** 密评名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 开始时间 */
  start?: number;
}

export interface RequestPagingCryptoReq {
  /** 产品型号 */
  model?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 厂商id */
  producerId?: number;
  /** 产品种类id */
  productId?: number;
}

export interface RequestPagingDatabaseReq {
  /** 云集群 */
  cloud?: number;
  /** 数据库名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 支持商密 1 支持 2 不支持 */
  support?: number;
}

export interface RequestPagingPhysicalReq {
  /** 物理环境名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestPagingPolicyInfoReq {
  /** 是否启用 */
  enable?: number;
  /** 策略名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestPagingProducerReq {
  /** 企业厂商名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestPagingReceiveInfoReq {
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
}

export interface RequestPagingSafetyReq {
  /** 设备名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 厂商id */
  producerId?: number;
}

export interface RequestPagingStrategyReq {
  /** 云 id */
  cloudId?: number;
  /** 结束时间 */
  end?: number;
  /** 策略名称 */
  name?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 开始时间 */
  start?: number;
}

export interface RequestPasswordProcedureBackAlgorithmicTrend {
  /** 密码算法(1.分组算法，2.非对称算法，3.杂凑算法，4.序列算法) */
  algorithmic?: string[];
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestPasswordProcedureBackChannelTrafficPropotionPie {
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
}

export interface RequestPasswordProcedureBackDeviceTrend {
  /** 应用ID */
  appId?: number[];
  /** 设备ID */
  deviceId?: number[];
  /** 结束时间 */
  end: number;
  /** 云ID */
  regionId?: number;
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export enum RequestPasswordProcedureBackPasswordTechType {
  PasswordProcedureBackPasswordTechTypeAlgorithm = 1,
  PasswordProcedureBackPasswordTechTypeProtocol = 2,
  PasswordProcedureBackPasswordTechTypeDevice = 3,
}

export interface RequestPasswordProcedureBackPasswordTechWordCloud {
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
  /** 图表类型 */
  type: RequestPasswordProcedureBackPasswordTechType;
}

export interface RequestPasswordProcedureBackProtocolsTrend {
  /** 结束时间 */
  end: number;
  /** 密码协议 */
  protocol?: string[];
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestPasswordProcedureBackSensitiveDataAnalysisPie {
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
}

export interface RequestProtocolSecretAssessmentCurved {
  /** 结束时间 */
  end: number;
  /** 密码协议 */
  protocol?: string[];
  /** 开始时间 */
  start: number;
  /** 类型 */
  timeType: number;
}

export interface RequestPushCloudReq {
  /** 探针 ID */
  agent: string;
  /** 云集群 ID */
  cloud: number;
}

export interface RequestPushStrategyReq {
  /** 探针 ID */
  agent?: string;
  /** 策略执行方案 1: 仅允许 2: 仅限制 */
  mode?: number;
  /** 策略 ID 数组 */
  strategies?: string[];
}

export interface RequestRegister {
  /** @example "电子邮箱" */
  email?: string;
  /** @example "int 是否启用" */
  enable?: string;
  /** @example "昵称" */
  nickName?: string;
  /** @example "密码" */
  passWord: string;
  /** @example "电话号码" */
  phone?: string;
  /** 角色ID数组 */
  roles: number[];
  /** @example "用户名" */
  userName: string;
}

export interface RequestReqOnlineUserInfo {
  /** 页码 */
  page?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 用户名 */
  userName?: string;
}

export interface RequestRiskHoleData {
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
  /** 类型，按天(1)、按周(2)、按月(3)、按小时（4） */
  type: number;
}

export interface RequestRoleNameReq {
  /** 角色ID */
  id: number;
  /** 角色名 */
  name: string;
}

export interface RequestRoleReq {
  /** 角色ID */
  id: number;
  /** 菜单ID列表 */
  menus?: string[];
  /** 角色名 */
  name: string;
  /** 资源菜单ID列表 */
  resource?: number[];
}

export interface RequestScrapeReq {
  /** 探针 ID */
  agent: string;
  /** 采集操作 1: 启动 2: 停止 */
  opt: number;
}

export interface RequestSecretFlowRateReq {
  /** 结束时间 */
  end: number;
  /** 设备 ID */
  id?: number[];
  /** 开始时间 */
  start: number;
}

export interface RequestStrategyInfo {
  /** 绑定设备应用 ID 数组 */
  apps?: number[];
  /** 云集群ID */
  cloudId: number;
  /** 策略描述 */
  description?: string;
  /** 绑定设备 ID 数组 */
  devices?: number[];
  /** 失效时间 */
  expired: number;
  /** 主键ID */
  id?: string;
  /** 策略名称 */
  name: string;
  /** 绑定ip和端口 */
  nets?: RequestNetwork[];
}

export interface RequestTemplateReq {
  /** 模版基础信息 */
  base: string[];
  /** 架构组件 */
  component?: string[];
  /** 密码应用数据库存储 */
  database?: string[];
  /** 密码应用密码设备 */
  device?: string[];
  /** 密码应用重要数据 */
  importance?: string[];
  /** 密码应用安全设备 */
  security?: string[];
  /** 类型 1 密码设备 2 密码应用 3 密评信息 */
  type: number;
}

export interface RequestTimeReq {
  /** 结束时间 */
  end: number;
  /** 开始时间 */
  start: number;
}

export interface RequestUpdateCert {
  /** 证书名字 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 证书uuid */
  uuid?: string;
}

export interface RequestUploadReq {
  /** 文件内容 */
  file?: string;
}

export interface RequestUserListReq {
  /** 结束时间 */
  end?: number;
  /** 昵称 */
  nickName?: string;
  /** 当前页数 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 角色ID */
  role?: number;
  /** 开始时间 */
  start?: number;
  /** 用户名 */
  userName?: string;
}

export interface ResponseAgentHistory {
  /** 探针编号 */
  agent_uuid?: string;
  /** 编号 */
  id?: string;
  /** IP地址 */
  ip?: string;
  /** MAC地址 */
  mac?: string;
  /** 操作内容 */
  operation?: string;
  /** 录入时间 */
  operation_time?: number;
  /** 云集群 */
  region?: string;
}

export interface ResponseAgentInfo {
  /** 探针编号 */
  agent?: string;
  /** 云集群ID */
  cloudId?: number;
  /** 云集群名称 */
  cloudName?: string;
  /** 探针IP */
  ip?: string;
  /** 策略 id 数组 */
  list?: string[];
  /** 探针MAC地址 */
  mac?: string;
  /** 探针策略所选模式 1: 仅允许 2: 仅限制 3: 未下发策略 */
  mode?: number;
  /** 探针是否开启抓包 1: 开启 2: 关闭 */
  scrape?: number;
  /** 启动时间 */
  start?: number;
  /** 探针状态  1:自检状态 2:运行中 3:重启中 4:负载过大产生丢包 5:占用过多系统资源 6:离线 */
  status?: number;
}

export interface ResponseAlertTagInfo {
  /** 子标签 */
  children?: ResponseAlertTagInfo[];
  /** 告警标签UUID，修改时不能为空 */
  id?: string;
  /** 标签name */
  name: string;
  /** 父标签UUID */
  parent?: string;
}

export interface ResponseAllCWEResp {
  /** CWE ID */
  id?: number;
  /** CWE Name */
  name?: string;
}

export interface ResponseAllPolicyName {
  /** 告警策略uuid */
  id?: string;
  /** 告警策略名称 */
  name?: string;
}

export interface ResponseApp {
  /** 域名 */
  domain?: string;
  /** 主键 ID */
  id?: number;
  /** 对外IP */
  ip?: string;
  /** 应用名称 */
  name?: string;
  /** 对外端口 */
  port?: number;
  /** 服务厂商 */
  producer?: string;
}

export interface ResponseCVEList {
  /** 厂商名称 */
  assignerShortName?: string;
  /** cve id */
  id?: string;
  /** CVSS3.x 危险等级 1 None(0.0),2 Low(0.1-3.9),3 Medium(4.0-6.9),4 High(7.0-8.9),5 Critical(9.0-10.0) */
  level?: number;
  /** cve名称 */
  name?: string;
  /** CVSS3.x 分数 0.0-10.0 */
  score?: number;
  /** 公开时间 */
  timestampPublished?: number;
  /** 更新时间 */
  timestampUpdated?: number;
}

export interface ResponseCert {
  /** 证书文件uuid */
  fileName?: string;
  /** 证书文件名 */
  fileUuid?: string;
  /** 可信 */
  isCredible?: number;
  /** 有效 */
  isVaild?: number;
  /** 颁发者 */
  issuer?: string;
  /** 证书名称 */
  name?: string;
  /** 有效日期 */
  notAfter?: number;
  /** 颁发日期 */
  notBefore?: number;
  /** 公钥算法 */
  publicAlgorithm?: string;
  /** 证书原始数据 */
  rawData?: number[];
  /** 备注 */
  remark?: string;
  /** 算法 */
  signatureAlgorithm?: string;
  /** 主题 */
  subject?: string;
  /** 证书uuid */
  uuid?: string;
}

export interface ResponseCertList {
  list?: ResponseCert[];
  total?: number;
}

export interface ResponseChartData {
  /** 图例 */
  legend?: string;
  /** x轴数据 */
  xData?: any;
  /** y轴数据 */
  yData?: any;
}

export type ResponseCipherAppDel = object;

export interface ResponseCipherAppDetail {
  /** 应用介绍 */
  applications?: string;
  /** 流程审批状态 1 审批完成 2 审批中 3 未提交 */
  approve?: number;
  /** 业务领域 */
  areas?: number[];
  /** 架构组件 */
  component?: CommonGlobalComponent[];
  /** 数据库存储 */
  database?: ResponseDatabaseInfo[];
  /** 密码设备详情 */
  device?: ResponseCipherDeviceDetail[];
  /** 域名 */
  domainName?: string;
  /** 主键ID */
  id?: number;
  /** 重要数据 */
  importData?: ResponseImportData[];
  /** 内网信息 */
  intranetInfo?: SentinelFlowServerAdminModelSystemResponseIpInfo[];
  /** 对外服务IP */
  ip?: string;
  /** 是否支持ssl */
  isSsl?: number;
  /** 内核版本 */
  kernel?: string;
  /** 登陆URL */
  loginUrl?: string;
  /** 应用标识 */
  logo?: string;
  /** 应用全称 */
  name?: string;
  /** 网络拓扑图 */
  ntdImgs?: string[];
  /** 操作系统名称 */
  osName?: string;
  /** 操作系统版本 */
  osVersion?: string;
  /** 对外服务端口 */
  port?: number;
  /** 应用协议 */
  protocol?: string[];
  /** 审批结果 */
  result?: number;
  /** 网络安全设备 */
  safety?: ResponseSafetyInfo[];
  /** 应用简称 */
  shortName?: string;
  /** 所属云ID */
  sysCloudId?: number;
  /** 所属云名称 */
  sysCloudName?: string;
  /** 服务厂商ID */
  sysProducerId?: number;
  /** 服务厂商名称 */
  sysProducerName?: string;
  /** 服务对象 */
  targets?: number[];
  /** 租户名 */
  tenantName?: string;
  /** uuid */
  uuid?: string;
}

export interface ResponseCipherAppList {
  /** 列表 */
  list?: ResponseCipherAppListInfo[];
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总数量 */
  total?: number;
}

export interface ResponseCipherAppListInfo {
  /** 应用介绍 */
  applications?: string;
  /** 流程审批状态 1 审批完成 2 审批中 3 未提交 */
  approve?: number;
  /** 录入时间 */
  createdAt?: number;
  /** 主键ID */
  id?: number;
  /** 对外 IP */
  ip?: string;
  /** 内核版本 */
  kernel?: string;
  /** 应用标识 */
  logo?: string;
  /** 应用名称 */
  name?: string;
  /** 操作系统名称 */
  osName?: string;
  /** 操作系统版本 */
  osVersion?: string;
  /** 对外 端口 */
  port?: number;
  /** 审批结果 */
  result?: number;
  /** 应用简称 */
  shortName?: string;
  /** 所属云ID */
  sysCloudId?: number;
  /** 所属云ID */
  sysCloudName?: string;
  /** 服务厂商ID */
  sysProducerId?: number;
  /** 服务厂商名称 */
  sysProducerName?: string;
  /** uuid */
  uuid?: string;
}

export type ResponseCipherAppSave = object;

export interface ResponseCipherAppTag {
  /** 密码应用ID */
  id?: number;
  /** 密码应用名称 */
  name?: string;
}

export type ResponseCipherDeviceDel = object;

export interface ResponseCipherDeviceDetail {
  /** 流程审批状态 1 审批完成 2 审批中 3 未提交 */
  approve?: number;
  /** 非对称算法 */
  asymmetricAlgorithm?: number[];
  /** 非对称算法(其他) */
  asymmetricAlgorithmStr?: string;
  /** 架构组件 */
  component?: CommonGlobalComponent[];
  /** 技术文档 */
  files?: ResponseFileInfo[];
  /** GM/T 0053 IP地址 */
  gmt_0053_ip?: string;
  /** GM/T 0053 端口 */
  gmt_0053_port?: number;
  /** GM/T 0053 密钥 */
  gmt_0053_secret?: string;
  /** 分组算法 */
  groupingAlgorithm?: number[];
  /** 分组算法(其他) */
  groupingAlgorithmStr?: string;
  /** 哈希算法 */
  hashAlgorithm?: number[];
  /** 哈希算法(其他) */
  hashAlgorithmStr?: string;
  /** 主键ID */
  id?: number;
  /** 服务IP */
  ips?: SentinelFlowServerAdminModelSystemResponseIpInfo[];
  /** 是否密钥管理 */
  isKeyManage?: number;
  /** 内核版本 */
  kernel?: string;
  /** 操作系统名称 */
  osName?: string;
  /** 操作系统版本 */
  osVersion?: string;
  /** 其他算法 */
  otherAlgorithm?: string;
  /** 产品形态 */
  pattern?: number;
  /** 认证编号 */
  producerCertSerial?: string;
  /** 有效期至 */
  producerExpiry?: number;
  /** 颁发时间 */
  producerIssue?: number;
  /** 产品型号 */
  producerModel?: string;
  /** 产品名称 */
  producerName?: string;
  /** 产品版本 */
  producerVersion?: string;
  /** 备注 */
  remark?: string;
  /** 审批结果 */
  result?: number;
  /** 序列算法 */
  sequencingAlgorithm?: number[];
  /** 序列算法(其他) */
  sequencingAlgorithmStr?: string;
  /** 所属集群ID */
  sysCloudId?: number;
  /** 产品种类 */
  sysCommercialName?: string;
  /** 服务厂商ID */
  sysCryptoId?: number;
  /** 产品厂商 */
  sysProducerName?: string;
  /** uuid */
  uuid?: string;
}

export interface ResponseCipherDeviceList {
  /** 列表 */
  list?: ResponseCipherDeviceListInfo[];
  /** 页码 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总数量 */
  total?: number;
}

export interface ResponseCipherDeviceListInfo {
  /** 流程审批状态 1 审批完成 2 审批中 3 未提交 */
  approve?: number;
  /** 证书编号 */
  certSerial?: string;
  /** 所属云名称 */
  cloudName?: string;
  /** 产品种类 */
  commercialName?: string;
  /** 创建时间 */
  createdAt?: number;
  /** 厂商密码设备Id */
  cryptoId?: number;
  /** 产品厂商 */
  cryptoName?: string;
  /** 主键ID */
  id?: number;
  /** 服务IP */
  ips?: SentinelFlowServerAdminModelSystemResponseIpInfo[];
  /** 内核版本 */
  kernel?: string;
  /** 产品厂商 */
  model?: string;
  /** 操作系统名称 */
  osName?: string;
  /** 操作系统版本 */
  osVersion?: string;
  /** 产品厂商 */
  producerName?: string;
  /** 备注 */
  remark?: string;
  /** 审批结果 */
  result?: number;
  /** uuid */
  uuid?: string;
}

export type ResponseCipherDeviceSave = object;

export interface ResponseCloudInfo {
  /** 物理环境ID，更新时必填 */
  id?: number;
  /** IP 地址段 */
  ips: ResponseIPSegment[];
  /** 云名称 */
  name: string;
  /** 实体机数量 */
  number?: number;
  /** 物理环境ID */
  physicalId: number;
  /** 物理环境名称 */
  physicalName?: string;
  /** 备注 */
  remark?: string;
  /** 物理环境UUID，更新时必填 */
  uuid?: string;
}

export interface ResponseCnnvdDetail {
  /** 影响产品 */
  affectedProduct?: string;
  /** 影响系统 */
  affectedSystem?: string;
  /** 厂商 */
  affectedVendor?: string;
  /** cnnvd id */
  cnnvdCode?: string;
  /** cve id */
  cveCode?: string;
  /** 危险等级 */
  hazardLevel?: number;
  /** 补丁信息 */
  patch?: string;
  /** 产品简介 */
  productDesc?: string;
  /** 收录时间 */
  publishTimestamp?: number;
  /** 参考网址 */
  referUrl?: string;
  /** 更新时间 */
  updateTimestamp?: number;
  /** 供应商 */
  vendor?: string;
  /** 漏洞简介 */
  vulDesc?: string;
  /** 漏洞名称 */
  vulName?: string;
  /** 漏洞类型 */
  vulTypeName?: string;
}

export interface ResponseCnnvdVendor {
  label?: string;
  value?: string;
}

export interface ResponseCommercialInfo {
  /** 商密产品种类 描述 */
  description: string;
  /** 商密产品种类ID，更新时必填 */
  id?: number;
  /** 商密产品种类 名称 */
  name: string;
  /** 商密产品种类 认证依据 json数组 */
  remark: string[];
  /** 商密产品种类UUID，更新时必填 */
  uuid?: string;
}

export interface ResponseCryptoEvaluation {
  /** 密码算法 */
  algorithm: string;
  /** appid 修改时必传 */
  appId: number;
  /** 流程审批状态 1 审批完成 2 审批中 3 未提交 */
  approve?: number;
  /** 负责人员 */
  charge?: string;
  /** 云集群ID */
  cloudId: number;
  /** 云集群名称 */
  cloudName?: string;
  /** 所属部门 */
  department?: string;
  /** 描述 */
  description?: string;
  /** 域名 */
  domain?: string;
  /** 电子邮箱 */
  email?: string;
  /** 所属省密码管理部门 */
  government?: string;
  /** UUID 修改时必传 */
  id?: string;
  /** 对外ip地址 */
  ip: string;
  /** 密评等级 1  一级 2 二级 3 三级 4 四级 */
  level: number;
  /** 密评系统名称 */
  name: string;
  /** 内网地址 */
  net?: SentinelFlowServerAdminModelEvaluationResponseNet[];
  /** 办公电话 */
  officePhone?: string;
  /** 被测单位地址 */
  orgAddress?: string;
  /** 被测单位名称 */
  orgName: string;
  /** 被测单位联系人名称 */
  orgStaff: string;
  /** 参与人员 */
  part?: string;
  /** 密评通过时间不能为空 */
  passTime: number;
  /** 对外端口 */
  port: number;
  /** 职务/职称 */
  position?: string;
  /** 被测单位邮编 */
  postcode?: string;
  /** 厂商ID */
  producerId: number;
  /** 厂商名称 */
  producerName?: string;
  /** 密码协议 1 tls 2 http */
  protocol: number;
  /** 密码算法一致性 */
  pwd_algorithm?: boolean;
  /** 密码设备一致性 */
  pwd_device?: boolean;
  /** 密码协议一致性 */
  pwd_protocol?: boolean;
  /** 密评报告文件uuid */
  reportId: string;
  /** 密评报告文件名称 */
  reportName: string;
  /** 审批结果 */
  result?: number;
  /** 评测分数 */
  score: number;
  /** 被测单位联系人移动电话 */
  staffPhone: string;
  /** 应用标识 */
  tag?: string;
  /** 租户名 */
  tenant?: string;
  /** 登录 url */
  url?: string;
}

export interface ResponseCryptoEvaluationApplicationPlatform {
  /** 部署位置 */
  address?: string;
  /** 应用平台密码算法 */
  algorithm: string;
  /** 密评系统ID */
  cryptoEvaluationID: string;
  /** 应用平台主要功能 */
  description?: string;
  /** UUID 修改时必传 */
  id?: string;
  /** 对外IP */
  ip?: string;
  /** 密评系统应用平台名称 */
  name: string;
  /** 云内IP */
  net?: string;
  /** 应用平台协议 1  IPSec 2 TLS */
  protocol: number;
  /** 密评系统应用平台版本 */
  version?: string;
}

export interface ResponseCryptoEvaluationCryptoProduct {
  /** 密评系统密码产品密码算法 */
  algorithm: string;
  /** 密评系统密码产品商密证书编号 */
  cert?: string;
  /** 密评系统ID */
  cryptoEvaluationID: string;
  /** 用途 */
  description?: string;
  /** UUID 修改时必传 */
  id?: string;
  /** 密评系统密码产品云外ip地址 */
  ip: string;
  /** 密评系统密码产品名称 */
  name: string;
  /** 云内IP */
  net?: string;
  /** 密评系统密码产品厂商名称 */
  producerName?: string;
  /** 备注 */
  remark?: string;
}

export interface ResponseCryptoEvaluationNetworkCommunication {
  /** 网络和通信密码算法 */
  algorithm: string;
  /** 密评系统ID */
  cryptoEvaluationID: string;
  /** 网络和通信主要功能 */
  description?: string;
  /** UUID 修改时必传 */
  id?: string;
  /** 网络和通信目标IP */
  ip: string;
  /** 密评系统网络和通信名称 */
  name: string;
  /** 网络和通信源IP */
  netIP?: string;
  /** 网络和通信目标端口 */
  port: number;
  /** 网络和通信通道协议 1  IPSec 2 TLS */
  protocol: number;
  /** 网络和通信备注 */
  remark?: string;
}

export interface ResponseCryptoEvaluationNetworkSecurity {
  /** 密评系统ID */
  cryptoEvaluationID: string;
  /** 用途 */
  description?: string;
  /** UUID 修改时必传 */
  id?: string;
  /** 密评系统网络及安全设备ip地址 */
  ip?: string;
  /** 重要程度 1  重要 2 一般 */
  level?: number;
  /** 密评系统网络及安全设备名称 */
  name: string;
  /** 密评系统网络及安全设备厂商名称 */
  producerName?: string;
  /** 密评系统网络及安全设备型号 */
  serial?: string;
}

export interface ResponseCryptoInfo {
  /** 证书文件UUID */
  certId?: string;
  /** 证书文件名称 */
  certName?: string;
  /** 证书编号 */
  certSerial: string;
  /** 标准和技术要求 */
  description?: string;
  /** 生产企业名称 */
  enterprise?: string;
  /** 生产企业所在地 */
  enterpriseLocation?: string;
  /** 委托人名称 */
  entrust?: string;
  /** 委托人所在地 */
  entrustLocation?: string;
  /** 有效期至 */
  expiry: number;
  /** 密码设备ID，更新时必填 */
  id?: number;
  /** 颁发时间 */
  issue: number;
  /** 产品型号 */
  model: string;
  /** 产品名称 */
  name: string;
  /** 原证书编号 */
  preSerial?: string;
  /** 生产者（制造商）名称 */
  producer?: string;
  /** 厂商ID */
  producerId: number;
  /** 生产者（制造商）所在地 */
  producerLocation?: string;
  /** 厂商名称 */
  producerName?: string;
  /** 产品种类ID */
  productId: number;
  /** 产品种类名称 */
  productName?: string;
  /** 设备UUID，更新时必填 */
  uuid?: string;
  /** 产品版本 */
  version: string;
}

export interface ResponseDatabaseInfo {
  /** 云集群ID */
  cloudId: number;
  /** 云集群名称 */
  cloudName?: string;
  /** 域名 */
  domain?: string;
  /** 数据库ID，更新时必填 */
  id?: number;
  /** 数据库实例名 */
  instanceName: string;
  /** ip地址 */
  ip: string;
  /** 数据库名称 */
  name: string;
  /** 内网ip地址 */
  net?: string;
  /** 内网端口 */
  netPort?: number;
  /** 端口 */
  port: number;
  /** 厂商ID */
  producerId: number;
  /** 厂商名称 */
  producerName?: string;
  /** 备注 */
  remark?: string;
  /** 支持商密 */
  support?: boolean;
  /** 数据库UUID，更新时必填 */
  uuid?: string;
  /** 数据库版本 */
  version: string;
}

export interface ResponseDetailChild {
  /** 分类 */
  category?: string;
  /** 分类 */
  categoryLabel?: string;
  /** 字段 */
  field?: string;
  /** 名称 */
  label?: string;
  /** 单位 */
  unit?: string;
  /** 值 */
  value?: string;
}

export interface ResponseDevice {
  /** 所属云名称 */
  cloudName?: string;
  /** 产品种类 */
  commercialName?: string;
  /** 厂商密码设备Id */
  cryptoId?: number;
  /** 产品名称 */
  cryptoName?: string;
  /** 主键ID */
  id?: number;
  /** 服务IP */
  ips?: SentinelFlowServerAdminModelAgentResponseIpInfo[];
  /** 产品型号 */
  model?: string;
  /** 产品厂商 */
  producerName?: string;
}

export interface ResponseFileInfo {
  /** 文件key */
  key?: string;
  /** 文件名 */
  name?: string;
}

export interface ResponseFlowChart {
  /** 粒度 */
  accuracy?: number;
  /** 图表数据 */
  chartData?: ResponseChartData[];
  /** 标题 */
  title?: string;
  /** 单位 */
  unit?: string;
  /** x轴类型 time-s(秒时间戳) time-ms(毫秒时间戳)  text(文本) */
  xType?: string;
}

export interface ResponseFlowDetail {
  children?: ResponseDetailChild[];
  /** 名称 */
  label?: string;
  /** 值 */
  value?: string;
}

export interface ResponseFlowTable {
  /** 选择的查询字段 */
  selectField?: BaseSelectField;
  /** 表格数据 */
  table?: Record<string, string>[];
  /** 总数 */
  total?: number;
}

export interface ResponseIPSegment {
  /** 网段结束地址 */
  end: string;
  /** 网段起始地址 */
  start: string;
}

export interface ResponseImportData {
  /** 主键ID */
  id?: string;
  /** 主要功能 */
  mainFun?: string;
  /** 数据名 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 安全需求 */
  securityRequire?: string;
  /** 存储位置 */
  storageLocation?: string;
}

export interface ResponseListOnlineResponse {
  /** 在线用户信息数组 */
  list?: ResponseOnlineResponse[];
  /** 当前第几页 */
  page?: number;
  /** 每页个数 */
  pageSize?: number;
  /** 总数 */
  total?: number;
}

export interface ResponseListResponse {
  /** 可访问按钮信息数组 */
  button?: ResponseRespMenusArray[];
  /** 创建时间 */
  createdAt?: number;
  /** 用户邮箱 */
  email?: string;
  /** 用户是否被冻结 1正常 2冻结 */
  enable?: number;
  /** 用户主键ID */
  id?: number;
  /** 可访问菜单信息数组 */
  menus?: ResponseRespMenusArray[];
  /** 用户昵称 */
  nickName?: string;
  /** 用户手机号 */
  phone?: string;
  /** 角色信息数组 */
  roles?: ResponseRespAuthority[];
  /** 更新时间 */
  updatedAt?: number;
  /** 用户登录名 */
  userName?: string;
  /** 用户UUID */
  uuid?: string;
}

export interface ResponseLoginResponse {
  /** 可访问按钮信息数组 */
  button?: ResponseRespMenus[];
  /** token过期时间 */
  expiresAt?: number;
  /** 可访问菜单信息数组 */
  menus?: ResponseRespMenus[];
  /** 角色信息数组 */
  roles?: ResponseRespAuthority[];
  /** token */
  token?: string;
  /** 用户信息 */
  user?: MysqlSysUser;
}

export interface ResponseMetricChildren {
  /** 分类 */
  category?: string;
  /** 名称 */
  label?: string;
  /** 类型 */
  type?: number;
  /** 单位 */
  unit?: string;
  /** 值 */
  value?: string;
}

export interface ResponseMetricOption {
  children?: ResponseMetricChildren[];
  /** 名称 */
  label?: string;
  /** 值 */
  value?: string;
}

export interface ResponseModuleFieldChild {
  /** 分类 */
  category?: string;
  /** 数据库原字段 */
  field?: string;
  /** 字段值 */
  fieldValue?: string;
  /** 名称 */
  label?: string;
  /** 是否为主指标 */
  mainFlag?: boolean;
  /** L4网络层 L7应用层 */
  netType?: string;
  /** 是否展示 */
  showFlag?: boolean;
  /** 表名 */
  tableName?: string;
  /** 自定义单位 */
  unit?: string;
  /** 值 */
  value?: string;
}

export interface ResponseModuleFieldOption {
  children?: ResponseModuleFieldChild[];
  /** 名称 */
  label?: string;
  /** 分组 */
  type?: string;
  /** 值 */
  value?: string;
}

export interface ResponseOnlineResponse {
  /** 用户登录地址 */
  address?: string;
  /** 浏览器名称 */
  browser?: string;
  /** 用户主键ID */
  id?: number;
  /** 登录ip */
  ip?: string;
  /** 用户最后访问时间 */
  lastTime?: number;
  /** 用户登录时间 */
  loginTime?: number;
  /** 系统 */
  os?: string;
  /** 平台 */
  platform?: string;
  /** 用户会话状态 */
  status?: number;
  /** 用户登录名 */
  userName?: string;
  /** 会话 UUID */
  uuid?: string;
}

export interface ResponseOperationListResponse {
  /** 记录数组 */
  list?: ResponseOperationResponse[];
  /** 当前第几页 */
  page?: number;
  /** 每页个数 */
  pageSize?: number;
  /** 总数 */
  total?: number;
}

export interface ResponseOperationResponse {
  /** 代理 */
  agent?: string;
  /** 请求Body */
  body?: string;
  /** 创建时间 */
  createdAt?: number;
  /** 错误信息 */
  error_message?: string;
  /** 日志记录主键 ID */
  id?: number;
  /** 请求ip */
  ip?: string;
  /** 延迟 */
  latency?: string;
  /** 请求方法 */
  method?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 请求路径 */
  path?: string;
  /** 响应Body */
  resp?: string;
  /** 请求状态 */
  status?: number;
  /** 更新时间 */
  updatedAt?: number;
  /** 用户id */
  user_id?: number;
  /** 用户UUID */
  user_uuid?: string;
}

export interface ResponsePageResult {
  list?: any;
  page?: number;
  pageSize?: number;
  total?: number;
}

export interface ResponsePagingAlertTagInfoResp {
  /** 密码设备数组 */
  list?: ResponseAlertTagInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingCNVDResp {
  /** CNVD信息数组 */
  list?: ResponseRespCNVD[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingCVEResp {
  /** CVE信息数组 */
  list?: ResponseCVEList[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingCloudResp {
  /** 物理环境信息数组 */
  list?: ResponseCloudInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingCnnvdResp {
  /** CNNVD信息数组 */
  list?: ResponseCnnvdDetail[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingCommercialResp {
  /** 商密产品种类数组 */
  list?: ResponseCommercialInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingCryptoEvaluationResp {
  /** 密评系统数组 */
  list?: ResponseCryptoEvaluation[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingCryptoResp {
  /** 密码设备数组 */
  list?: ResponseCryptoInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingDatabaseResp {
  /** 数据库信息数组 */
  list?: ResponseDatabaseInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingHistoryResp {
  /** 策略信息数组 */
  list?: ResponseAgentHistory[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingPhysicalResp {
  /** 物理环境信息数组 */
  list?: ResponsePhysicalInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingPolicy {
  /** 绑定设备应用 ID 数组 */
  apps?: ResponseApp[];
  /** 告警所选云集群id */
  cloudId?: number;
  /** 告警所选云集群是全选还是单选 1 全选 2 单选 */
  cloudIsAll?: number;
  /** 告警所选云集群名称 */
  cloudName?: string;
  /** 系数 */
  coefficient?: number;
  /** 创建时间 */
  createdAt?: number;
  /** 绑定设备 ID 数组 */
  devices?: ResponseDevice[];
  /** 时长 秒数 */
  duration?: number;
  /** 1启用 2禁用 */
  enable?: number;
  /** 告警失效时间 */
  expired?: number;
  /** 次数 频次 */
  frequency?: number;
  /** 告警策略id */
  id?: string;
  /** 告警类型  中文 用密异常 */
  key?: string[];
  /** 告警层级 1 Security 2 L4 3 L7 */
  layer?: number;
  /** 告警级别 1 重要告警 2 一般告警 3 轻微告警 */
  level?: number;
  /** 告警策略名称 */
  name?: string;
  /** 告警所选云集群ip 数组 */
  nets?: RedisNet[];
  /** 告警对象信息 */
  receive?: ResponseReceiveInfo[];
  /** 备注 */
  remark?: string;
  /** 1有效 2失效 */
  status?: number;
  /** 符号  1 >:gt,2 =:eq,3 <:lt,4 >=:ge,5 <=:le */
  symbol?: number;
  /** 告警标签id */
  tagId?: string[];
  /** 告警所选标签名称 */
  tagName?: string;
  /** 告警类型 */
  type?: number;
  /** 告警类型  tcp_establish_fail */
  value?: string[];
  /** 触发方式  1 触发立即告警 2 每小时最多告警一次(合并方式) 3 每天最多告警一次(合并方式) */
  way?: number;
}

export interface ResponsePagingPolicyInfo {
  /** 告警策略uuid数组 */
  list?: ResponsePagingPolicy[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingProducerResp {
  /** 厂商信息数组 */
  list?: ResponseProducerInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingReceiveInfo {
  /** 密码设备数组 */
  list?: ResponseReceiveInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingSafetyResp {
  /** 安全设备数组 */
  list?: ResponseSafetyInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePagingStrategyResp {
  /** 策略信息数组 */
  list?: ResponseStrategyInfo[];
  /** 当前页数 */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 总页数 */
  total?: number;
}

export interface ResponsePhysicalInfo {
  /** 物理地址 */
  address: string;
  /** 环境简介 */
  description?: string;
  /** 联系邮箱 */
  email?: string;
  /** 物理环境ID，更新时必填 */
  id?: number;
  /** 重要程度，1 一般，2 重要 3 非常重要 */
  level: number;
  /** 环境名称 */
  name: string;
  /** 联系人 */
  person?: string;
  /** 联系电话 */
  phone?: string;
  /** 物理环境UUID，更新时必填 */
  uuid?: string;
}

export interface ResponsePolicyInfo {
  /** 密码应用信息 */
  apps?: number[];
  /** 告警所选云集群id */
  cloudId?: number;
  /** 告警所选云集群是全选还是单选 1 全选 2 单选 */
  cloudIsAll: number;
  /** 系数 */
  coefficient?: number;
  /** 密码设备信息 */
  devices?: number[];
  /** 时长 秒数 */
  duration?: number;
  /** 1启用 2禁用,修改时不能为空 */
  enable?: number;
  /** 告警失效时间 */
  expired: number;
  /** 次数 频次 */
  frequency?: number;
  /** 告警策略id,修改时不能为空 */
  id?: string;
  /** 告警层级 1 Security 2 L4 3 L7 */
  layer: number;
  /** 告警级别 1 重要告警 2 一般告警 3 轻微告警 */
  level: number;
  /** 告警策略名称 */
  name: string;
  /** 告警所选云集群ip 数组 */
  nets?: RedisNet[];
  /** 告警对象信息 */
  receive: string[];
  /** 备注 */
  remark?: string;
  /** 1有效 2失效 */
  status?: number;
  /** 符号  1 >:gt,2 =:eq,3 <:lt,4 >=:ge,5 <=:le */
  symbol?: number;
  /** 告警标签id */
  tagId: string[];
  /** 告警类型 */
  type?: number;
  /** 告警类型  tcp_establish_fail */
  value: string[];
  /** 触发方式  1 触发立即告警 2 每小时最多告警一次(合并方式) 3 每天最多告警一次(合并方式) */
  way: number;
}

export interface ResponseProducerInfo {
  /** 企业厂商简介 */
  description?: string;
  /** 企业厂商邮箱 */
  email?: string;
  /** 企业厂商ID，更新时必填 */
  id?: number;
  /** 企业厂商名称 */
  name: string;
  /** 企业厂商办公地址 */
  office?: string;
  /** 企业厂商联系人 */
  person?: string;
  /** 企业厂商联系电话 */
  phone?: string;
  /** 企业厂商注册地址 */
  registration?: string;
  /** 企业厂商提供服务 枚举数组,1 应用服务,2 密码设备,3 密评机构,4 安全设备,5 数据库,6 其它 */
  service: number[];
  /** 企业厂商UUID，更新时必填 */
  uuid?: string;
}

export interface ResponseReceiveInfo {
  /** 接收组地址 */
  address: string;
  /** 接收组uuid */
  id?: string;
  /** 接收组名称 */
  name: string;
  /** 接收组类型   1 界面告警 2 邮件告警 3 短信告警 */
  type: number;
}

export interface ResponseRespAllRole {
  /** 角色数组 */
  list?: ResponseRespAuthority[];
}

export interface ResponseRespAuthority {
  /** 角色ID */
  authorityId?: number;
  /** 角色名 */
  authorityName?: string;
}

export interface ResponseRespCNVD {
  /** cve编号 */
  cveId?: string;
  /** cve链接 */
  cveUrl?: string;
  /** 漏洞描述 */
  description?: string;
  /** 漏洞发现者 */
  discovererName?: string;
  /** 漏洞解决办法 */
  formalWay?: string;
  /** 漏洞编号 */
  id?: string;
  /** 漏洞类型(是否为事件型漏洞) */
  isEvent?: string;
  /** 漏洞公开时间时间戳 */
  openTimestamp?: number;
  /** 漏洞补丁信息 */
  patchDescription?: string;
  /** 漏洞补丁名称 */
  patchName?: string;
  /** 漏洞影响产品 */
  product?: string[];
  /** 漏洞参考链接 */
  referenceLink?: string;
  /** 漏洞危害等级 */
  serverity?: number;
  /** 漏洞报送时间时间戳 */
  submitTimestamp?: number;
  /** 漏洞标题 */
  title?: string;
}

export interface ResponseRespCVE {
  /** 影响产品 */
  affected?: {
    /** 漏洞收集链接 */
    collectionURL?: string;
    /** 默认状态 */
    defaultStatus?: string;
    /** 漏洞模块 */
    modules?: string[];
    /** 漏洞包名 */
    packageName?: string;
    /** 漏洞平台 */
    platforms?: string[];
    /** 漏洞产品 */
    product?: string;
    /** 漏洞程序文件 */
    programFiles?: string[];
    programRoutines?: {
      /** 漏洞程序函数名称 */
      name?: string;
    }[];
    /** 漏洞仓库 */
    repo?: string;
    /** 漏洞厂商 */
    vendor?: string;
    /** 版本信息 */
    versions?: {
      /** 版本变更记录 */
      changes?: {
        /** 所处版本 */
        at?: string;
        /** 版本受影响状态 */
        status?: string;
      }[];
      /** 版本小于 */
      lessThan?: string;
      /** 版本影响状态 */
      status?: string;
      /** 漏洞版本 */
      version?: string;
      /** 版本类型 */
      versionType?: string;
    }[];
  }[];
  /** 厂商名称 */
  assignerShortName?: string;
  /** CVSS 3.1 漏洞评分（严重程度） */
  cvssV3_1?: {
    /** 攻击复杂度 */
    attackComplexity?: string;
    /** 攻击向量 */
    attackVector?: string;
    /** 可用性影响 */
    availabilityImpact?: string;
    /** 漏洞评分 */
    baseScore?: number;
    /** 漏洞等级 */
    baseSeverity?: string;
    /** 机密性影响 */
    confidentialityImpact?: string;
    /** 完整性影响 */
    integrityImpact?: string;
    /** 权限要求 */
    privilegesRequired?: string;
    /** 影响范围 */
    scope?: string;
    /** 用户交互 */
    userInteraction?: string;
    /** 漏洞向量 */
    vectorString?: string;
    /** 版本 */
    version?: string;
  };
  /** 漏洞描述 */
  descriptions?: MongoUniversal[];
  /** cve 编号 */
  id?: string;
  /** 漏洞攻击模式 */
  impacts?: {
    /** CAPEC 编号 */
    capecId?: string;
    /** 漏洞影响描述 */
    descriptions?: {
      /** 语言 */
      lang?: string;
      /** 漏洞影响描述信息 */
      value?: string;
    }[];
  }[];
  /** cve名称 */
  name?: string;
  /** 漏洞类型数组 */
  problemTypes?: {
    descriptions?: {
      /** CWE ID */
      cweId?: string;
      /** 漏洞类型描述 */
      description?: string;
      /** 语言 */
      lang?: string;
      /** 漏洞类型来源 */
      type?: string;
    }[];
  }[];
  /** 参考链接 */
  references?: {
    /** 漏洞参考链接名称 */
    name?: string;
    /** 漏洞参考链接标签 */
    tags?: string[];
    /** 漏洞参考链接url */
    url?: string;
  }[];
  /** 漏洞解决方案 */
  solutions?: MongoUniversal[];
  /** 漏洞来源 */
  source?: {
    /** 漏洞公告 */
    advisory?: string;
    /** 漏洞来源缺陷编号 */
    defects?: string[];
    /** 漏洞发现方式 */
    discovery?: string;
  };
  /** 状态 */
  state?: string;
  /** 公开时间 */
  timestampPublished?: number;
  /** 保留时间 */
  timestampReserved?: number;
  /** 更新时间 */
  timestampUpdated?: number;
}

export interface ResponseRespListMenu {
  /** 菜单深度 */
  depth?: number;
  /** 菜单数组 */
  list?: ResponseRespMenus[];
}

export interface ResponseRespListRole {
  /** 角色数组 */
  list?: ResponseRespRoles[];
  /** 当前页 */
  page?: number;
  /** 每页个数 */
  pageSize?: number;
  /** 角色总数 */
  total?: number;
}

export interface ResponseRespMenus {
  /** 子菜单 */
  children?: ResponseRespMenus[];
  /** 是否在列表隐藏 */
  hidden?: boolean;
  /** 路由path */
  key?: string;
  /** 路由name */
  label?: string;
  /** 父菜单UUID */
  parent?: string;
  /** 排序标记 */
  sort?: number;
  /** 菜单UUID */
  uuid?: string;
}

export interface ResponseRespMenusArray {
  /** 路由path */
  key?: string;
  /** 路由name */
  label?: string;
  /** 父菜单UUID */
  parent?: string;
  /** 菜单UUID */
  uuid?: string;
}

export interface ResponseRespRoles {
  /** 角色ID */
  authorityId?: number;
  /** 角色名 */
  authorityName?: string;
  /** 可访问菜单信息数组 */
  menus?: ResponseRespMenusArray[];
  /** 角色拥有的资源 ID json 数组 */
  resource?: number[];
}

export interface ResponseResponse {
  code?: number;
  data?: any;
  errorData?: any;
  msg?: string;
}

export interface ResponseSafetyInfo {
  /** 设备用途 */
  description?: string;
  /** 安全设备ID，更新时必填 */
  id?: number;
  /** 重要程度 */
  important: number;
  /** 设备IP */
  ip: string;
  /** 设备名称 */
  name: string;
  /** 设备内网IP */
  net?: string;
  /** 设备内网Port */
  netPort?: number;
  /** 物理环境ID */
  physicalId: number;
  /** 物理环境名称 */
  physicalName?: string;
  /** 设备Port */
  port: number;
  /** 厂商ID */
  producerId: number;
  /** 厂商名称 */
  producerName?: string;
  /** 设备型号 */
  serial: string;
  /** 设备UUID，更新时必填 */
  uuid?: string;
}

export interface ResponseSelfInfo {
  /** 可访问按钮信息数组 */
  button?: ResponseRespMenus[];
  /** 可访问菜单信息数组 */
  menus?: ResponseRespMenus[];
  /** 角色信息数组 */
  roles?: ResponseRespAuthority[];
  /** 用户信息 */
  user?: MysqlSysUser;
}

export interface ResponseStrategyInfo {
  /** 绑定设备应用 ID 数组 */
  apps?: ResponseApp[];
  /** 云集群ID */
  cloudId?: number;
  /** 云集群名称 */
  cloudName?: string;
  /** 创建时间 */
  createdAt?: number;
  /** 策略描述 */
  description?: string;
  /** 绑定设备 ID 数组 */
  devices?: ResponseDevice[];
  /** 失效时间 */
  expired?: number;
  /** 主键ID */
  id?: string;
  /** 策略名称 */
  name?: string;
  /** 绑定ip和端口 */
  nets?: SentinelFlowServerAdminModelAgentResponseNet[];
}

export interface ResponseSysCaptchaResponse {
  captchaId?: string;
  captchaLength?: number;
  openCaptcha?: boolean;
  picPath?: string;
}

export interface ResponseSysUserResponse {
  user?: MysqlSysUser;
}

export interface ResponseTagChildren {
  /** 分类 */
  category?: string;
  /** 名称 */
  label?: string;
  relateField?: string;
  /** 类型 */
  type?: string;
  /** 值 */
  value?: string;
}

export interface ResponseTagOption {
  children?: ResponseTagChildren[];
  /** 名称 */
  label?: string;
  /** 值 */
  value?: string;
}

export interface ResponseTrafficScatterChartRes {
  data?: number[][];
  id?: string;
}

export interface SentinelFlowServerAdminModelAgentResponseIpInfo {
  ip?: string;
  port?: number;
}

export interface SentinelFlowServerAdminModelAgentResponseNet {
  /** 截止 IP */
  endIp?: string;
  /** 截止端口 */
  endPort?: number;
  /** 协议  1;tcp ,2:udp ,3:all */
  protocol?: number;
  /** 起始 IP */
  startIp?: string;
  /** 起始端口 */
  startPort?: number;
}

export interface SentinelFlowServerAdminModelEvaluationResponseNet {
  ip?: string;
  port?: number;
}

export interface SentinelFlowServerAdminModelSystemResponseIpInfo {
  ip?: string;
  port?: number;
}
