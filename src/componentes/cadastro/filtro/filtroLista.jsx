import React from "react";


const Lista = () => {
    return (
        <>
        <div role="combobox" aria-expanded="false" class="ui fluid multiple search selection dropdown">
                <input type="text" aria-autocomplete="list" autoComplete="off" class="search" tabindex="0" value=""/>
                <span class="sizer"></span>
                <div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">Select Country</div>
                <i aria-hidden="true" class="dropdown icon"></i>
                <div aria-multiselectable="true" role="listbox" class="menu transition">
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                        <i class="af flag"></i>
                        <span class="text">Afghanistan</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="ax flag"></i>
                        <span class="text">Aland Islands</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="al flag"></i>
                        <span class="text">Albania</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="dz flag"></i>
                        <span class="text">Algeria</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="as flag"></i>
                        <span class="text">American Samoa</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="ad flag"></i>
                        <span class="text">Andorra</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="ao flag"></i>
                        <span class="text">Angola</span>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default Lista