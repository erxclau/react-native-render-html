## API Report File for "react-native-render-html"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { AccessibilityProps } from 'react-native';
import { AnchorTagName } from '@native-html/transient-render-engine';
import { AttribTagNames } from '@native-html/transient-render-engine';
import { ComponentType } from 'react';
import type { CounterStyleRenderer } from '@jsamr/counter-style';
import { CSSAbsoluteHardcodedFontSize } from '@native-html/transient-render-engine';
import { CSSAbsoluteLengthUnit } from '@native-html/transient-render-engine';
import { CSSAbsoluteLengthUnitsMultiplicators } from '@native-html/transient-render-engine';
import { CSSDisplayRegistry } from '@native-html/transient-render-engine';
import { CSSFlattenProcessedTypes } from '@native-html/transient-render-engine';
import { CSSFlowedPropKey } from '@native-html/transient-render-engine';
import { CSSHardcodedBorderWidth } from '@native-html/transient-render-engine';
import { CSSLengthUnit } from '@native-html/transient-render-engine';
import { CSSListStyleTypePropertyBase } from '@native-html/transient-render-engine';
import { CSSLongNativeBlockPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeTextPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeTranslatableBlockFlowedPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeTranslatableBlockPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeTranslatableBlockRetainedPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeTranslatableTextFlowedPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeTranslatableTextPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeTranslatableTextRetainedPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeUntranslatableBlockFlowedPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeUntranslatableBlockPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeUntranslatableBlockRetainedPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeUntranslatableTextFlowedPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeUntranslatableTextPropKey } from '@native-html/transient-render-engine';
import { CSSLongNativeUntranslatableTextRetainedPropKey } from '@native-html/transient-render-engine';
import { CSSLongWebTextFlowedPropKey } from '@native-html/transient-render-engine';
import { CSSLongWebTextRetainedPropKey } from '@native-html/transient-render-engine';
import { CSSNativePropKey } from '@native-html/transient-render-engine';
import { CSSProcessorConfig } from '@native-html/transient-render-engine';
import { CSSPropagationRegistry } from '@native-html/transient-render-engine';
import { CSSProperties } from '@native-html/transient-render-engine';
import { CSSPropertyCompatCategory } from '@native-html/transient-render-engine';
import { CSSPropertyDisplayCategory } from '@native-html/transient-render-engine';
import { CSSPropertyNameList } from '@native-html/transient-render-engine';
import { CSSPropertyPropagationCategory } from '@native-html/transient-render-engine';
import { CSSPropertySpecs } from '@native-html/transient-render-engine';
import { CSSRelativeHarcodedFontSize } from '@native-html/transient-render-engine';
import { CSSShortBlockPropKey } from '@native-html/transient-render-engine';
import { CSSShortNativeTranslatableBlockPropKey } from '@native-html/transient-render-engine';
import { CSSShortPropsKey } from '@native-html/transient-render-engine';
import { CSSShortTextPropKey } from '@native-html/transient-render-engine';
import { CustomElementModel } from '@native-html/transient-render-engine';
import { defaultHTMLElementModels } from '@native-html/transient-render-engine';
import { DefaultHTMLElementModelsStatic } from '@native-html/transient-render-engine';
import { Document as Document_2 } from '@native-html/transient-render-engine';
import { DocumentContext } from '@native-html/transient-render-engine';
import { DomVisitorCallbacks } from '@native-html/transient-render-engine';
import { EditsTagNames } from '@native-html/transient-render-engine';
import { Element as Element_2 } from '@native-html/transient-render-engine';
import { ElementCategory } from '@native-html/transient-render-engine';
import { ElementModelBase } from '@native-html/transient-render-engine';
import { EmbeddedTagNames } from '@native-html/transient-render-engine';
import { ExtendedNativeViewStyleKeys } from '@native-html/transient-render-engine';
import { ExtraNativeLongViewStyleKeys } from '@native-html/transient-render-engine';
import { ExtraNativeShortStyle } from '@native-html/transient-render-engine';
import { ExtraNativeShortViewStyleKeys } from '@native-html/transient-render-engine';
import { ExtraNativeTextStyle } from '@native-html/transient-render-engine';
import { ExtraNativeTextStyleKeys } from '@native-html/transient-render-engine';
import { ExtraNativeUntranslatedLongStyles } from '@native-html/transient-render-engine';
import { ExtraNativeViewStyle } from '@native-html/transient-render-engine';
import { FunctionComponent } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { GroupingTagNames } from '@native-html/transient-render-engine';
import { HTMLContentModel } from '@native-html/transient-render-engine';
import { HTMLElementModel } from '@native-html/transient-render-engine';
import { HTMLElementModelShape } from '@native-html/transient-render-engine';
import { HTMLModelRecord } from '@native-html/transient-render-engine';
import { ImageStyle } from 'react-native';
import { ImageURISource } from 'react-native';
import { InteractiveTagNames } from '@native-html/transient-render-engine';
import { isDomElement } from '@native-html/transient-render-engine';
import { isDomText } from '@native-html/transient-render-engine';
import { Markers } from '@native-html/transient-render-engine';
import { MetadataTagNames } from '@native-html/transient-render-engine';
import { MixedSizeCSSPropertiesKeys } from '@native-html/transient-render-engine';
import { MixedStyleDeclaration } from '@native-html/transient-render-engine';
import { MixedStyleRecord } from '@native-html/transient-render-engine';
import { NativeBlockStyles } from '@native-html/transient-render-engine';
import { NativeDirectionalStyleKeys } from '@native-html/transient-render-engine';
import { NativeElementModel } from '@native-html/transient-render-engine';
import { NativeShortKeys } from '@native-html/transient-render-engine';
import { NativeTextStyleKey } from '@native-html/transient-render-engine';
import { NativeTextStyles } from '@native-html/transient-render-engine';
import { Node } from '@native-html/transient-render-engine';
import { NodeWithChildren } from '@native-html/transient-render-engine';
import type { ParserOptions } from 'htmlparser2';
import { PressableProps } from 'react-native';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactNativeProps } from '@native-html/transient-render-engine';
import { ReactNativePropsDefinitions } from '@native-html/transient-render-engine';
import { ReactNativePropsSwitch } from '@native-html/transient-render-engine';
import type { ReactNode } from 'react';
import { SectioningTagNames } from '@native-html/transient-render-engine';
import { SetMarkersForTNode } from '@native-html/transient-render-engine';
import { StyleProp } from 'react-native';
import { StylesConfig } from '@native-html/transient-render-engine';
import { StylessReactNativeProps } from '@native-html/transient-render-engine';
import { StylessReactNativeTextProps } from '@native-html/transient-render-engine';
import { StylessReactNativeViewProps } from '@native-html/transient-render-engine';
import { TabularTagNames } from '@native-html/transient-render-engine';
import { TagName } from '@native-html/transient-render-engine';
import { TBlock } from '@native-html/transient-render-engine';
import { TDocument } from '@native-html/transient-render-engine';
import { TEmpty } from '@native-html/transient-render-engine';
import { Text as Text_2 } from '@native-html/transient-render-engine';
import { TextLevelTagNames } from '@native-html/transient-render-engine';
import { TextProps } from 'react-native';
import type { TextStyle } from 'react-native';
import { TNode } from '@native-html/transient-render-engine';
import { TNodeDescriptor } from '@native-html/transient-render-engine';
import { TNodePrintOptions } from '@native-html/transient-render-engine';
import { TNodeShape } from '@native-html/transient-render-engine';
import { TNodeType } from '@native-html/transient-render-engine';
import type { TouchableHighlightProps } from 'react-native';
import { TPhrasing } from '@native-html/transient-render-engine';
import { TRenderEngine } from '@native-html/transient-render-engine';
import { TRenderEngineOptions } from '@native-html/transient-render-engine';
import { TStylesShape } from '@native-html/transient-render-engine';
import { TText } from '@native-html/transient-render-engine';
import { UnsupportedTagNames } from '@native-html/transient-render-engine';
import { UntranslatableTagNames } from '@native-html/transient-render-engine';
import { ViewProps } from 'react-native';
import { ViewStyle } from 'react-native';
import { WebBlockRetainProperties } from '@native-html/transient-render-engine';
import { WebBlockStyles } from '@native-html/transient-render-engine';
import { WebTextFlowProperties } from '@native-html/transient-render-engine';
import { WebTextStyles } from '@native-html/transient-render-engine';

export { AnchorTagName }

export { AttribTagNames }

// @public
export function buildTREFromConfig(props: TRenderEngineConfig): TRenderEngine;

// @public
export function collapseTopMarginForChild(n: number, tchildren: readonly TNode[]): number | null;

export { CSSAbsoluteHardcodedFontSize }

export { CSSAbsoluteLengthUnit }

export { CSSAbsoluteLengthUnitsMultiplicators }

export { CSSDisplayRegistry }

export { CSSFlattenProcessedTypes }

export { CSSFlowedPropKey }

export { CSSHardcodedBorderWidth }

export { CSSLengthUnit }

export { CSSListStyleTypePropertyBase }

export { CSSLongNativeBlockPropKey }

export { CSSLongNativeTextPropKey }

export { CSSLongNativeTranslatableBlockFlowedPropKey }

export { CSSLongNativeTranslatableBlockPropKey }

export { CSSLongNativeTranslatableBlockRetainedPropKey }

export { CSSLongNativeTranslatableTextFlowedPropKey }

export { CSSLongNativeTranslatableTextPropKey }

export { CSSLongNativeTranslatableTextRetainedPropKey }

export { CSSLongNativeUntranslatableBlockFlowedPropKey }

export { CSSLongNativeUntranslatableBlockPropKey }

export { CSSLongNativeUntranslatableBlockRetainedPropKey }

export { CSSLongNativeUntranslatableTextFlowedPropKey }

export { CSSLongNativeUntranslatableTextPropKey }

export { CSSLongNativeUntranslatableTextRetainedPropKey }

export { CSSLongWebTextFlowedPropKey }

export { CSSLongWebTextRetainedPropKey }

export { CSSNativePropKey }

export { CSSProcessorConfig }

export { CSSPropagationRegistry }

export { CSSProperties }

export { CSSPropertyCompatCategory }

export { CSSPropertyDisplayCategory }

export { CSSPropertyNameList }

export { CSSPropertyPropagationCategory }

export { CSSPropertySpecs }

export { CSSRelativeHarcodedFontSize }

export { CSSShortBlockPropKey }

export { CSSShortNativeTranslatableBlockPropKey }

export { CSSShortPropsKey }

export { CSSShortTextPropKey }

// @public
export type CustomBlockRenderer = CustomRenderer<TBlock>;

export { CustomElementModel }

// @public
export type CustomMixedRenderer = CustomRenderer<TBlock | TPhrasing | TText>;

// @public
export type CustomRenderer<T extends TNode> = ComponentType<CustomRendererProps<T>>;

// @public
export interface CustomRendererProps<T extends TNode> extends InternalRendererProps<T> {
    InternalRenderer: InternalRenderer<T>;
}

// @public
export type CustomTagRendererRecord = Record<string, CustomBlockRenderer | CustomTextualRenderer | CustomMixedRenderer>;

// @public
export type CustomTextualRenderer = CustomRenderer<TText | TPhrasing>;

// @public
export const defaultFallbackFonts: {
    'sans-serif': string;
    monospace: string;
    serif: string;
};

export { defaultHTMLElementModels }

export { DefaultHTMLElementModelsStatic }

// @public
export const defaultListStyleSpecs: Record<DefaultSupportedListStyleType, ListStyleSpec>;

// @public
export type DefaultSupportedListStyleType = 'none' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-alpha' | 'lower-latin' | 'upper-alpha' | 'upper-latin' | 'disclosure-open' | 'disclosure-closed';

// @public
export const defaultSystemFonts: string[];

export { Document_2 as Document }

export { DocumentContext }

// @public
export interface DocumentMetadata {
    baseTarget: DocumentContext['baseTarget'];
    baseUrl: string;
    dir: 'ltr' | 'rtl';
    lang: string;
    links: DocumentContext['links'];
    meta: DocumentContext['meta'];
    title: string;
}

// @public (undocumented)
export interface DomNodeToHtmlReporter {
    // (undocumented)
    (node: Node | null, depth: number, html: string): void;
}

// @public
export function domNodeToHTMLString(root: Node | null, reporter?: DomNodeToHtmlReporter, depth?: number): string;

export { DomVisitorCallbacks }

export { EditsTagNames }

export { Element_2 as Element }

export { ElementCategory }

export { ElementModelBase }

// @public
export type EmbeddedHeadersProvider = <T extends EmbeddedWithHeadersTagName>(uri: string, tagName: T, params: EmbeddedWithHeadersParamsMap[T]) => Record<string, string> | null | void;

export { EmbeddedTagNames }

// @public
export interface EmbeddedWithHeadersParamsMap extends Record<EmbeddedWithHeadersTagName, Record<string, unknown>> {
    // (undocumented)
    img: {
        printHeight?: number;
        printWidth?: number;
    };
}

// @public
export type EmbeddedWithHeadersTagName = Exclude<EmbeddedTagNames, 'svg' | 'canvas' | 'math'>;

export { ExtendedNativeViewStyleKeys }

export { ExtraNativeLongViewStyleKeys }

export { ExtraNativeShortStyle }

export { ExtraNativeShortViewStyleKeys }

export { ExtraNativeTextStyle }

export { ExtraNativeTextStyleKeys }

export { ExtraNativeUntranslatedLongStyles }

export { ExtraNativeViewStyle }

// @public
export interface FallbackFontsDefinitions {
    // (undocumented)
    'sans-serif': string;
    // (undocumented)
    monospace: string;
    // (undocumented)
    serif: string;
}

// @public
export interface GenericPressableProps extends AccessibilityProps {
    // (undocumented)
    borderless?: boolean;
    // (undocumented)
    onPress?: TouchableHighlightProps['onPress'];
    // (undocumented)
    style?: StyleProp<ViewStyle>;
}

// @public
export function getNativePropsForTNode<T extends TPhrasing | TText | TBlock>(props: TDefaultRendererProps<T>): T extends TBlock ? ViewProps & {
    onPress?: () => void;
} : TextProps;

export { GroupingTagNames }

export { HTMLContentModel }

export { HTMLElementModel }

// @public
export type HTMLElementModelRecord = Record<string, HTMLElementModel<string, HTMLContentModel>>;

export { HTMLElementModelShape }

export { HTMLModelRecord }

// @public
export type HTMLSource = HTMLSourceInline | HTMLSourceDom | HTMLSourceUri;

// @public
export interface HTMLSourceDom {
    baseUrl?: string;
    dom: Element_2 | Document_2;
}

// @public
export interface HTMLSourceInline {
    baseUrl?: string;
    html: string;
}

// @public
export interface HTMLSourceUri {
    body?: string;
    headers?: Record<string, string>;
    method?: string;
    uri: string;
}

// @public (undocumented)
export interface ImageDimensions {
    // (undocumented)
    height: number;
    // (undocumented)
    width: number;
}

// @public
export function IMGElement(props: IMGElementProps): ReactElement;

// @public
export function IMGElementContainer({ style, onPress, testID, children, ...otherProps }: PropsWithChildren<Pick<IMGElementProps, 'onPress' | 'testID'> & Omit<ViewProps, 'style'> & {
    style: ViewStyle;
}>): ReactElement;

// @public
export function IMGElementContentAlt({ dimensions, alt, altColor, testID, children }: PropsWithChildren<IMGElementStateBase & {
    testID?: string;
}>): ReactElement;

// @public
export function IMGElementContentError(props: IMGElementStateError): ReactElement;

// @public
export function IMGElementContentLoading({ dimensions, children }: PropsWithChildren<IMGElementStateLoading>): ReactElement;

// @public
export function IMGElementContentSuccess({ source, imageStyle, dimensions, onError }: IMGElementStateSuccess): ReactElement;

// @public
export interface IMGElementProps extends UseIMGElementStateProps {
    // (undocumented)
    containerProps?: Omit<ViewProps, 'style'>;
    onPress?: PressableProps['onPress'];
    // (undocumented)
    testID?: string;
}

// @public
export type IMGElementState = IMGElementStateError | IMGElementStateSuccess | IMGElementStateLoading;

// @public
export interface IMGElementStateBase {
    alt?: string;
    altColor?: string;
    containerStyle: ViewStyle;
    dimensions: ImageDimensions;
    source: ImageURISource;
}

// @public
export interface IMGElementStateError extends IMGElementStateBase {
    // (undocumented)
    error: Error;
    // (undocumented)
    type: 'error';
}

// @public
export interface IMGElementStateLoading extends IMGElementStateBase {
    // (undocumented)
    type: 'loading';
}

// @public
export interface IMGElementStateSuccess extends IMGElementStateBase {
    imageStyle: ImageStyle;
    onError: (error: Error) => void;
    // (undocumented)
    type: 'success';
}

// @public
export interface IncompleteImageDimensions {
    // (undocumented)
    height: number | null;
    // (undocumented)
    width: number | null;
}

export { InteractiveTagNames }

// @public
export type InternalRenderer<T extends TNode> = ComponentType<InternalRendererProps<T>>;

// @public (undocumented)
export interface InternalRendererConfig<P> {
    // (undocumented)
    Renderer: ComponentType<P>;
    // (undocumented)
    rendererProps: P;
}

// @public
export interface InternalRendererProps<T extends TNode> extends RendererBaseProps<T> {
    sharedProps: RenderHTMLAmbiantSharedProps;
    style: T extends TText | TPhrasing ? NativeTextStyles : NativeBlockStyles;
    TDefaultRenderer: TDefaultRenderer<T>;
    TNodeChildrenRenderer: ComponentType<TNodeChildrenRendererProps>;
}

// Warning: (ae-forgotten-export) The symbol "internalRenderersMap" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type InternalRenderersConfigMap = typeof internalRenderersMap;

// @public
export type InternalRendererTag = keyof InternalRenderersConfigMap;

export { isDomElement }

export { isDomText }

// @public
export interface ListElementConfig {
    enableDynamicMarkerBoxWidth?: boolean;
    enableExperimentalRtl?: boolean;
    enableRemoveBottomMarginIfNested?: boolean;
    enableRemoveTopMarginIfNested?: boolean;
    getFallbackListStyleTypeFromNestLevel?: (nestLevel: number) => DefaultSupportedListStyleType;
    markerBoxStyle?: StyleProp<ViewStyle>;
    markerTextStyle?: TextStyle;
}

// @public
export type ListStyleSpec = TextualListStyleSpec | UnitaryListStyleSpec;

export { Markers }

export { MetadataTagNames }

export { MixedSizeCSSPropertiesKeys }

export { MixedStyleDeclaration }

export { MixedStyleRecord }

export { NativeBlockStyles }

export { NativeDirectionalStyleKeys }

export { NativeElementModel }

export { NativeShortKeys }

export { NativeTextStyleKey }

export { NativeTextStyles }

export { Node }

export { NodeWithChildren }

// @public
export interface PropsFromParent extends Record<string, any> {
    // (undocumented)
    collapsedMarginTop: number | null;
}

export { ReactNativeProps }

export { ReactNativePropsDefinitions }

export { ReactNativePropsSwitch }

// @public
export interface RendererBaseProps<T extends TNode> extends TNodeRendererProps<T> {
    nativeProps?: StylessReactNativeProps & {
        style?: StyleProp<ViewStyle>;
    };
    onPress?: (e: GestureResponderEvent) => void;
    textProps: TextProps;
    type: 'text' | 'block';
    viewProps: ViewProps;
}

// @public
export interface RenderersProps extends Record<string, any> {
    // (undocumented)
    a: {
        onPress?: (event: GestureResponderEvent, href: string, htmlAttribs: Record<string, string>, target: '_blank' | '_self' | '_parent' | '_top') => void;
    };
    // (undocumented)
    img: {
        enableExperimentalPercentWidth?: boolean;
        initialDimensions?: ImageDimensions;
    };
    // (undocumented)
    ol: ListElementConfig;
    // (undocumented)
    ul: ListElementConfig;
}

// @public
function RenderHTML(props: RenderHTMLProps): ReactElement;
export { RenderHTML }
export default RenderHTML;

// @public
export type RenderHTMLAmbiantSharedProps = Required<Pick<RenderHTMLSharedProps, SharedPropsWithoutFallback>> & Omit<RenderHTMLSharedProps, SharedPropsWithoutFallback>;

// @public
export interface RenderHTMLConfig extends RenderHTMLSharedProps, RenderHTMLPassedProps {
    remoteErrorView?: (source: HTMLSourceUri) => ReactElement;
    remoteLoadingView?: (source: HTMLSourceUri) => ReactElement;
    renderers?: CustomTagRendererRecord;
}

// @public
export function RenderHTMLConfigProvider(props: PropsWithChildren<RenderHTMLConfig>): ReactElement;

// @public
export interface RenderHTMLPassedProps {
    renderersProps?: Partial<RenderersProps>;
}

// @public
export interface RenderHTMLProps extends RenderHTMLConfig, RenderHTMLSourceProps, TRenderEngineConfig {
}

// @public
export interface RenderHTMLSharedProps {
    bypassAnonymousTPhrasingNodes?: boolean;
    computeEmbeddedMaxWidth?: (contentWidth: number, tagName: string) => number;
    customListStyleSpecs?: Record<string, ListStyleSpec>;
    debug?: boolean;
    defaultTextProps?: TextProps;
    defaultViewProps?: ViewProps;
    defaultWebViewProps?: any;
    enableExperimentalBRCollapsing?: boolean;
    enableExperimentalGhostLinesPrevention?: boolean;
    enableExperimentalMarginCollapsing?: boolean;
    GenericPressable?: ComponentType<GenericPressableProps>;
    pressableHightlightColor?: string;
    provideEmbeddedHeaders?: EmbeddedHeadersProvider;
    WebView?: ComponentType<any>;
}

// @public
export const RenderHTMLSource: React_2.NamedExoticComponent<RenderHTMLSourceProps>;

// @public
export interface RenderHTMLSourceProps {
    contentWidth?: number;
    onDocumentMetadataLoaded?: (documentMetadata: DocumentMetadata) => void;
    onHTMLLoaded?: (html: string) => void;
    onTTreeChange?: (ttree: TDocument) => void;
    source: HTMLSource;
}

export { SectioningTagNames }

export { SetMarkersForTNode }

// @public (undocumented)
export type SharedPropsWithoutFallback = Exclude<keyof RenderHTMLSharedProps, 'provideEmbeddedHeaders' | 'GenericPressable' | 'customListStyleSpecs'>;

// @public
export function splitBoxModelStyle(style: ReturnType<TNodeShape<TNodeType>['getNativeStyles']>): {
    boxModelStyle: Pick<NativeTextStyles | NativeBlockStyles, "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "bottom" | "direction" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "opacity" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "right" | "top" | "transform" | "width" | "zIndex" | "borderStyle">;
    otherStyle: Omit<NativeTextStyles | NativeBlockStyles, string>;
};

export { StylesConfig }

export { StylessReactNativeProps }

export { StylessReactNativeTextProps }

export { StylessReactNativeViewProps }

export { TabularTagNames }

export { TagName }

export { TBlock }

// @public
export interface TChildProps {
    childElement: ReactElement;
    childTnode: TNode;
    index: number;
    key: string | number;
    propsFromParent: PropsFromParent;
}

// @public
export interface TChildrenBaseProps {
    disableMarginCollapsing?: boolean;
    propsForChildren?: Partial<PropsFromParent>;
    renderChild?: (props: TChildProps) => ReactNode;
}

// @public
export const TChildrenRenderer: FunctionComponent<TChildrenRendererProps>;

// @public
export interface TChildrenRendererProps extends TChildrenBaseProps {
    tchildren: ReadonlyArray<TNode>;
}

// @public
export type TDefaultRenderer<T extends TNode> = ComponentType<TDefaultRendererProps<T>>;

// @public
export interface TDefaultRendererProps<T extends TNode> extends RendererBaseProps<T> {
    children?: ReactNode;
    propsForChildren?: Partial<PropsFromParent>;
    style: T extends TText | TPhrasing ? StyleProp<TextStyle> : StyleProp<ViewStyle>;
    TNodeChildrenRenderer: ComponentType<TNodeChildrenRendererProps>;
}

export { TDocument }

export { TEmpty }

export { Text_2 as Text }

export { TextLevelTagNames }

// @public
export interface TextualListStyleSpec {
    // (undocumented)
    counterStyleRenderer: CounterStyleRenderer;
    // (undocumented)
    type: 'textual';
}

export { TNode }

// @public
export function TNodeChildrenRenderer(props: TNodeChildrenRendererProps): ReactElement;

// @public
export interface TNodeChildrenRendererProps extends TChildrenBaseProps {
    tnode: TNode;
}

export { TNodeDescriptor }

export { TNodePrintOptions }

// @public
export const TNodeRenderer: React_2.NamedExoticComponent<TNodeRendererProps<any>>;

// @public
export interface TNodeRendererProps<T extends TNode> {
    propsFromParent?: PropsFromParent;
    renderIndex: number;
    renderLength: number;
    tnode: T;
}

export { TNodeShape }

export { TNodeType }

export { TPhrasing }

export { TRenderEngine }

// @public
export interface TRenderEngineConfig {
    allowedStyles?: CSSPropertyNameList;
    baseStyle?: MixedStyleDeclaration;
    classesStyles?: MixedStyleRecord;
    customHTMLElementModels?: HTMLElementModelRecord;
    dangerouslyDisableHoisting?: boolean;
    dangerouslyDisableWhitespaceCollapsing?: boolean;
    domVisitors?: DomVisitorCallbacks;
    emSize?: number;
    enableCSSInlineProcessing?: boolean;
    enableUserAgentStyles?: boolean;
    fallbackFonts?: FallbackFontsDefinitions;
    htmlParserOptions?: ParserOptions;
    idsStyles?: MixedStyleRecord;
    ignoredDomTags?: string[];
    ignoreDomNode?: (node: Node, parent: NodeWithChildren) => boolean | void | unknown;
    ignoredStyles?: CSSPropertyNameList;
    selectDomRoot?: TRenderEngineOptions['selectDomRoot'];
    setMarkersForTNode?: SetMarkersForTNode;
    systemFonts?: string[];
    tagsStyles?: MixedStyleRecord;
}

export { TRenderEngineOptions }

// @public
export function TRenderEngineProvider({ children, ...config }: PropsWithChildren<TRenderEngineConfig>): ReactElement;

export { TStylesShape }

export { TText }

// @public
export type UnitaryCounterRendererProps = {
    color: string;
    fontSize: number;
    index: number;
    lineHeight: number;
} & Pick<MixedStyleDeclaration, 'fontFamily' | 'fontStyle' | 'fontWeight' | 'fontVariant'>;

// @public
export interface UnitaryListStyleSpec {
    // (undocumented)
    Component: ComponentType<UnitaryCounterRendererProps>;
    // (undocumented)
    counterStyleRenderer: CounterStyleRenderer;
    // (undocumented)
    type: 'unitary';
}

export { UnsupportedTagNames }

export { UntranslatableTagNames }

// @public
export function useAmbientTRenderEngine(): TRenderEngine;

// @public
export function useComputeMaxWidthForTag(tagName: string): (cw: number) => number;

// @public
export function useContentWidth(): number;

// @public
export function useDocumentMetadata(): DocumentMetadata;

// @public
export function useIMGElementProps(props: InternalRendererProps<TBlock>): IMGElementProps;

// @public
export function useIMGElementState(props: UseIMGElementStateProps): IMGElementState;

// @public
export interface UseIMGElementStateProps {
    alt?: string;
    altColor?: string;
    cachedNaturalDimensions?: ImageDimensions;
    computeMaxWidth?: (contentWidth: number) => number;
    contentWidth?: number;
    enableExperimentalPercentWidth?: boolean;
    height?: string | number;
    initialDimensions?: ImageDimensions;
    objectFit?: WebBlockStyles['objectFit'];
    source: ImageURISource;
    style?: StyleProp<ImageStyle>;
    width?: string | number;
}

// @public
export function useIMGElementStateWithCache(props: UseIMGElementStateWithCacheProps): IMGElementStateError | IMGElementStateSuccess;

// @public
export type UseIMGElementStateWithCacheProps = UseIMGElementStateProps & Required<Pick<UseIMGElementStateProps, 'cachedNaturalDimensions'>>;

// @public
export function useInternalRenderer<T extends TagName>(tagName: T, props: InternalRendererProps<any>): T extends InternalRendererTag ? InternalRendererConfig<ReturnType<InternalRenderersConfigMap[T]['hook']>> : InternalRendererConfig<TDefaultRendererProps<any>>;

// @public
export function useNormalizedUrl(initialUrl: string): string;

// @public
export function useRendererProps<RendererProps extends RenderersProps = RenderersProps, K extends keyof RendererProps = keyof RendererProps>(tagName: K): RendererProps[K];

// @public
export function useSharedProps(): RenderHTMLAmbiantSharedProps;

// @public
export function useTNodeChildrenProps({ tnode, propsForChildren, disableMarginCollapsing, renderChild }: TNodeChildrenRendererProps): TChildrenRendererProps;

export { WebBlockRetainProperties }

export { WebBlockStyles }

export { WebTextFlowProperties }

export { WebTextStyles }

// (No @packageDocumentation comment for this package)

```