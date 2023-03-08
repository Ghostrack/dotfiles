require('nvim-tree').setup({
  git = {
    ignore = false,
  },
  renderer = {
    highlight_opened_files = '1',
    group_empty = true,
    icons = {
      show = {
        folder_arrow = false,
      },
    },
    indent_markers = {
      enable = true,
    },
  },
})

local function open_nvim_tree()
  require("nvim-tree.api").tree.open()
end

vim.cmd([[
  highlight NvimTreeIndentMarker guifg=#30323E
  augroup NvimTreeHighlights
    autocmd ColorScheme * highlight NvimTreeIndentMarker guifg=#30323E
  augroup end
]])

vim.keymap.set('n', '<Leader>n', ':NvimTreeFindFileToggle<CR>')

vim.api.nvim_create_autocmd({ "VimEnter" }, { callback = open_nvim_tree })
