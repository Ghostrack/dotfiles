return {
  'JoosepAlviste/nvim-ts-context-commentstring',
  opts = {
    custom_calculation = function (node, language_tree)
      if vim.bo.filetype == 'blade' and language_tree._lang ~= 'javascript' then
        return '{{-- %s --}}'
      end
    end,
  },
}
